// drag pluginの追加
// https://greensock.com/docs/v3/Plugins/Draggable
gsap.registerPlugin(Draggable);
const slideDelay = 1.5;//animation間隔(s)
const slideDuration = 0.3;//
//slide群
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const numSlides = slides.length;
// 1slideの幅
let slideWidth = 0;
// slide全体の合計幅
let wrapWidth = 0;
// スライドアニメーション(仮作成)
let slideAnimation = gsap.to({}, {duration:0.1});
//main処理
(()=>{
  //初期処理
  init();
  //main animation生成
  const animation = createAnimation();
  // アニメーションの発火間隔制御関数
  const timer = gsap.delayedCall(slideDelay, function(){
    // ドラッグしている場合
    if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
      // ディレイをして再帰処理
      timer.restart(true);
    } else {
      // スライドを左方向にアニメート
      animateSlides(-1);
    }
  });
  // 1page分のanimateさせるための仮想の要素
  const proxy = document.createElement("div");
  gsap.set(proxy, { x: "+=0"});
  const transform = gsap.getProperty(proxy);
  resize();
  // animationの更新関数定義
  function updateProgress() {
    const v = transform("x") / wrapWidth % 1;
    const n = v < 0 ? 1 + v : v;
    animation.progress(n);
  }
  const draggable = Draggable.create(proxy, {
    trigger: ".slides-container",
    //update draggable
    onPress: function(){
      timer.restart(true);
      slideAnimation.kill();
      this.update();
    },
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    // drag終了時の最終的な値の決定
    snap: {
      x: snapX
    }
  })[0];
  function animateSlides(direction) {
    timer.restart(true);
    slideAnimation.kill();
    // slideの次のアニメートX座標を計算
    // refactoring対象
    const x = snapX(transform("x") + direction * slideWidth);
    // slideの1ページ分をanimateさせるためのanimation
    // onUpdateで大元のスライドを同期、制御することで等間隔時間にanimateさせる
    slideAnimation = gsap.to(proxy, {
      duration: slideDuration,
      x: x,
      onUpdate: updateProgress
    });
  }
  //画面サイズ変更時イベント設定
  window.addEventListener("resize", resize);
  // 戻るボタンイベント定義
  prevButton.addEventListener("click", function(){
    animateSlides(1);
  });
  // 次へボタンイベント定義
  nextButton.addEventListener("click", function(){
    animateSlides(-1);
  });
  // 画面リサイズ時間数
  function resize() {
    const norm = (transform("x") / wrapWidth) || 0;
    slideWidth = slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;
    gsap.set(proxy, {x: norm * wrapWidth});
    animateSlides(0);
    slideAnimation.progress(1);
  }
})();
function init(){
  //slideにランダムで色付けを行う
  gsap.set(slides, {
    backgroundColor: () => {
      const num = Math.random() * 0xffffff;
      return '#' + parseInt(num).toString(16);
    },
    // 位置を横並びにする
    xPercent: i => i * 100
  });
}
// main animation生成
function createAnimation(){
  // slideのx座標決定関数を生成する関数
  // minとmaxの間になるように値が設定される
  const wrapPartial = (min, max) => {
    const r = max - min;
    return value => {
      const v = value - min;
      return v % r + min;
    }
  };
  // slideのx座標決定関数
  const wrap = wrapPartial(-100, (numSlides - 1) * 100);
  return gsap.to(slides, {
    duration: 1,
    xPercent: "+=" + (numSlides * 100),
    ease: "none",
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: wrap
    }
  })
}

// x座標から近いスライドの接点を計算
function snapX(x) {
  return Math.round(x / slideWidth) * slideWidth;
}
