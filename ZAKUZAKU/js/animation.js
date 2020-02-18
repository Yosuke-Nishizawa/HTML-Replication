// Top 背景
(() => {
  const TARGETS = ['.index_top_bg_01', '.index_top_bg_02', '.index_top_bg_03'];
  // 次の対象を取得
  const getNextTarget = current => {
    const currentIndex = TARGETS.indexOf(current);
    const nextIndex = currentIndex === (TARGETS.length - 1) ? 0 : currentIndex + 1;
    return TARGETS[nextIndex];
  }
  // 前の対象を取得
  const getPrevTarget = current => {
    const currentIndex = TARGETS.indexOf(current);
    const prevIndex = currentIndex === 0 ? (TARGETS.length - 1) : currentIndex - 1;
    return TARGETS[prevIndex];
  }
  // 単一の画像に対してのアニメーション生成
  // 前の画像をフェードアウトして、現在の画像をズームアウトする。
  // 次の画像の設定も行う
  const createImgAnime = target => {
    const prevTarget = getPrevTarget(target);
    const nextTarget = getNextTarget(target);
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
  // 再生、無限リピート
  animateTop.play();
  animateTop.repeat(-1);
})();