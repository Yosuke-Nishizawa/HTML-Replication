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
    const SLIDE_DELAY = 1.5;
    // 1slideのanimation時間
    const SLIDE_DURATION = 0.3;
    // 要素
    // slide群
    const slides = document.querySelectorAll(".index_news_bg");
    // 左ボタン
    const leftButton = document.querySelector(".arrow_news.arrow_left");
    // 右ボタン
    const rightButton = document.querySelector(".arrow_news.arrow_right");
    // slide数
    const numSlides = slides.length;
  })();

})();