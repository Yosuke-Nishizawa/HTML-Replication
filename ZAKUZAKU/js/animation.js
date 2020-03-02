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
    // const ORDER = {
    //   "previous": ".index_news_bg_03",
    //   "current": ".index_news_bg_01",
    //   "next": ".index_news_bg_02",
    // }
    const ORDER = [".index_news_bg_03", ".index_news_bg_01", ".index_news_bg_02"];
    const FIRST_INDEX = 0;
    const SHOWING_INDEX = 1;
    const END_INDEX = ORDER.length - 1;
    const slideOrder = slideRight => {
      if(slideRight) {
        // 始めの要素切り取り,末尾に追加
        ORDER.push(ORDER.shift());
      } else {
        // 末尾の要素を切り取り、先頭に追加
        ORDER.unshift(ORDER.pop());
      }
    }
    const anime =
      gsap.timeline({paused: true})
        .to('.index_news_bgs', {left: '-100%', duration:3});
    anime.play();
  })();

})();