const TARGETS = ['.img1', '.img2', '.img3'];
const getNextTarget = current => {
  const currentIndex = TARGETS.indexOf(current);
  const nextIndex = currentIndex === (TARGETS.length - 1) ? 0 : currentIndex + 1;
  return TARGETS[nextIndex];
}
const getPrevTarget = current => {
  const currentIndex = TARGETS.indexOf(current);
  const prevIndex = currentIndex === 0 ? (TARGETS.length - 1) : currentIndex - 1;
  return TARGETS[prevIndex];
}
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
// const createImgAnime = target => {
//   return gsap.timeline({paused:false, delay:0.3})
//         .set(target, {'z-index':1, display:'block'})
//         .set(getNextTarget(target), {'z-index':0, display:'block', opacity:1, scale:1.2})
//         .fromTo(target, {scale:1.2}, {scale:1, duration:2.5, ease:"none"})
//         .to(target, {opacity:0, duration:0.5})
//         .set(target, {'z-index':0, display:'none'});
// }
const animateTop = 
  gsap.timeline({paused:true})
      .add(createImgAnime(TARGETS[0]))
      .add(createImgAnime(TARGETS[1]))
      .add(createImgAnime(TARGETS[2]));
$("#pause").click(function(){
  animateTop.pause();
});
// animateTop.play();
// animateTop.repeat(-1); const ORDER = ['.img1-1','.img1-2','.img1-3'];
// const slideOrder = () => {
//   ORDER.push(ORDER.shift());
//   console.log(ORDER);
// };
// const slideAnime = gsap.timeline({paused:true})
//           .to([ORDER[1],ORDER[2]],{left:'-50px',duration:3})
//           .set(ORDER[0], {left: '100px'})
//           .call(slideOrder);
//     // .call(()=>{
//     //   gsap.timeline()
//     // });
// slideAnime.play();
// slideAnime.repeat(5);
const slideTargets = document.querySelectorAll('.img1s>div');
gsap.set(slideTargets, {x:i=>i*50});
gsap.to('.img1s>div',{
  repeat: -1,
  duration: 3,
  x: "+=150",
  modifiers: {
    x: function(x) {
      return (parseInt(x) % 150) + 'px';
    }
  }
});