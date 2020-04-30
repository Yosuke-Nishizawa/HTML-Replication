(() => {
  // const paused = false;
  const paused = true;
  // 次の対象を取得
  const getNextTarget = (current, targets) => {
    const currentIndex = targets.indexOf(current);
    const nextIndex = currentIndex === (targets.length - 1) ? 0 : currentIndex + 1;
    return targets[nextIndex];
  }
  // 前の対象を取得
  const getPrevTarget = (current, targets) => {
    const currentIndex = targets.indexOf(current);
    const prevIndex = currentIndex === 0 ? (targets.length - 1) : currentIndex - 1;
    return targets[prevIndex];
  }
  // Top 背景///////////////////////////////////////////////////////////
  (() => {
    const TARGETS = ['.index_top_bg_01', '.index_top_bg_02', '.index_top_bg_03'];
    // 単一の画像に対してのアニメーション生成
    // 前の画像をフェードアウトして、現在の画像をズームアウトする。
    // 次の画像の設定も行う
    const createImgAnime = target => {
      const prevTarget = getPrevTarget(target, TARGETS);
      const nextTarget = getNextTarget(target, TARGETS);
      return gsap.timeline({delay:-0.1})
            .set(prevTarget, {'z-index':1, display:'block'})
            .to(prevTarget, {opacity:0, duration:0.5})
            .set(prevTarget, {'z-index':0, display:'none'})
            .set(target, {'z-index':1, display:'block'})
            .set(nextTarget, {'z-index':0, display:'block', opacity:1, scale:1.2})
            .fromTo(target, {scale:1.2}, {scale:1, duration:2.5, ease:"none", delay:-0.3});
    }
    // 各画像のアニメーションを組み合わせる
    const animateTop = 
      gsap.timeline({paused:true})
          .add(createImgAnime(TARGETS[0]))
          .add(createImgAnime(TARGETS[1]))
          .add(createImgAnime(TARGETS[2]));
    if(!paused){
      // 再生、無限リピート
      animateTop.play();
      animateTop.repeat(-1);
    }
  })();
  // news //////////////////////////////////////////
  (() =>{
    // drag pluginの追加
    gsap.registerPlugin(Draggable);
    // animation発火間隔(s)
    const SLIDE_DELAY = paused ? 99999 : 5;
    // 1slideのanimation時間
    const SLIDE_DURATION = paused ? 99999 : 1;
    // 要素
    // slide群
    const slides = document.querySelectorAll(".index_news_bg");
    // slide親要素
    const slideParent = document.querySelector(".index_news_bgs");
    // 1slideの幅
    let slideWidth = 0;
    // slide全体の合計幅
    let entireSlideWidth = 0;
    // 詳細テキスト要素
    const detailTxts = document.querySelectorAll(".index_news_bg_detail");
    // 左ボタン
    const leftButton = document.querySelector(".arrow_news.arrow_left");
    // 右ボタン
    const rightButton = document.querySelector(".arrow_news.arrow_right");
    // slide数
    const numSlides = slides.length;
    // 単一slideアニメーション発火制御オブジェクト
    let timer = null;
    // slide上にmouseが存在するかのフラグ
    let mouseInSlide = false;
    // 1スライドアニメーション
    let oneSlideAnimation = gsap.to({}, {duration: 0.1});//仮作成
    // 1スライドアニメーションに使用する仮想要素
    const proxy = document.createElement("div");
    gsap.set(proxy, {x: "+=0"});
    // 仮想要素のプロパティオブジェクト
    const proxyProperty = gsap.getProperty(proxy);
    // slide全体アニメーション
    const entireSlideAnimation = (() => {
      // slideのx座標決定関数生成関数
      // minとmaxの間になるように値が設定される
      const wrapPartial = (min, max) => {
        const r = max - min;
        return value => {
          const v = value - min;
          return v % r + min;
        }
      }
      // slideのx座標決定関数
      return gsap.to(slides, {
        duration: 1,
        xPercent: "+=" + (numSlides * 100),
        ease: "none",
        paused: true,
        repeat: -1,
        // xの%の値設定前に干渉する -100%~(スライド数-1*100)%を繰り返す
        modifiers: {
          xPercent: wrapPartial(-100, (numSlides - 1) * 100)
        }
      })
    })();
    // スライドテキスト部分アニメーション
    const slideTextAnimation = 
      (function(){
        const duration = 5;
        const timeline = 
          gsap.timeline({
            paused: true,
            defaults: {
              duration: duration,
              ease: "none",
            }
          });
        const up = {'bottom': 0,'opacity': 1,};
        const down = {'bottom': -30,'opacity': 0,};
        return Array.from(detailTxts).reduce((tl, element, idx, src) =>{
          // 次のidx。最後の場合0
          const nextIdx = (idx + 1) % src.length;
          // 基準ラベル('start')+=秒数
          // 基準ラベルが定義されていない場合、はじめに設定したときに定義される
          const label = `start+=${idx * duration}`;
          return tl.to(element, down, label).to(src[nextIdx], up, label);
        },timeline);
      })();
    // ドラッグ制御オブジェクト
    const draggable = Draggable.create(proxy, {
      trigger: slideParent,
      // update draggable
      onPress: function() {
        timer.restart(true);
        oneSlideAnimation.kill();
        this.update();
      },
      onDrag: updateEntireSlideAnimation,
      onThrowUpdate: updateEntireSlideAnimation,
      // drag終了時の最終的な値の決定
      snap: {
        x: calcSlideSeamX
      }
    })[0];
    // main処理
    (()=>{
      //画面サイズ変更時イベント設定
      window.addEventListener("resize", resize);
      // 左ボタンイベント定義
      leftButton.addEventListener("click", () => anitemate1Slide(-1));
      // 右ボタンイベント定義
      rightButton.addEventListener("click", () => anitemate1Slide(1));
      // slide mouse侵入
      slideParent.addEventListener("mouseenter", () => mouseInSlide = true);
      // slide mouse侵入
      slideParent.addEventListener("mouseleave", () => mouseInSlide = false);
      init();
      timer = gsap.delayedCall(SLIDE_DELAY, function() {
        // ドラッグしている場合
        if (draggable.isPressed || draggable.isDragging || draggable.isThrowing || mouseInSlide) {
          // ディレイして再帰処理
          timer.restart(true);
        } else {
          // 左方向にスライド
          anitemate1Slide(-1);
        }
      })
      resize();
    })();
    // 初期処理
    function init() {
      gsap.set(slides, {
        left: i => (i * -100) + '%',
        xPercent: i => i * 100
      });
      //詳細テキスト部分非表示(先頭以外)
      const targetDetailTxts = Array.from(detailTxts);
      targetDetailTxts.shift();
      gsap.set(targetDetailTxts, {
        bottom: -30,
        opacity: 0
      });
    }
    // 与えられたx座標から近いスライドの接点x座標を計算
    function calcSlideSeamX(x) {
      return Math.round(x / slideWidth) * slideWidth;
    }
    // 全体slide animationの更新関数
    function updateEntireSlideAnimation() {
      const progress = proxyProperty("x") / entireSlideWidth;
      entireSlideAnimation.progress(progress);
      slideTextAnimation.progress(1 - progress);
    }
    // 1slideスライドさせる
    // direction: スライド方向, -1:左, 1:右
    function anitemate1Slide(direction) {
      timer.restart(true);
      oneSlideAnimation.kill();
      // slideの次のアニメート先x座標を計算
      const x = calcSlideSeamX(proxyProperty("x") + direction * slideWidth);
      // slideの1ページ分をanimateさせるためのanimation定義
      // onUpdateで大元のスライドを同期、制御することで等間隔時間にanimateさせる
      oneSlideAnimation = gsap.to(proxy, {
        duration: SLIDE_DURATION,
        x: x,
        onUpdate: updateEntireSlideAnimation,
        modifiers: {
          x: x => {
            const newX = (entireSlideWidth + parseInt(x)) % entireSlideWidth;
            return newX + "px";
          }
        }
      })
    }
    // 画面リサイズ時関数
    function resize() {
      const norm = (proxyProperty("x") / entireSlideWidth) || 0;
      slideWidth = slides[0].offsetWidth;
      entireSlideWidth = slideWidth * numSlides;
      gsap.set(proxy, {x: norm * entireSlideWidth});
      anitemate1Slide(0);
      oneSlideAnimation.progress(1);
    }
  })();

})();