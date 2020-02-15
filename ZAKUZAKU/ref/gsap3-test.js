const TARGETS = ['.img1', '.img2', '.img3'];
const getNextTarget = current => {
  const currentIndex = TARGETS.indexOf(current);
  const nextIndex = currentIndex === (TARGETS.length - 1) ? 0 : currentIndex + 1;
  return TARGETS[nextIndex];
}
const createImgAnime = target => {
  return gsap.timeline({paused:false})
        .set(target, {'z-index':1, display:'block'})
        .set(getNextTarget(target), {'z-index':0, display:'block', opacity:1, scale:1})
        .fromTo(target, {scale:1}, {scale:1.2, duration:3})
        .to(target, {opacity:0, duration:1})
        .set(target, {'z-index':0, display:'none'});
}
const animateTop = 
  gsap.timeline({paused:true})
      .add(createImgAnime(TARGETS[0]))
      .add(createImgAnime(TARGETS[1]))
      .add(createImgAnime(TARGETS[2]));
animateTop.play();
animateTop.repeat(-1);