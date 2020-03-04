gsap.registerPlugin(Draggable);
(() => {
  const slideDelay = 1.5;
  const slideDuration = 0.3;
  const slides = document.querySelectorAll("#slide-sample .slide");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");
  const numSlides = slides.length;
  // for(let i = 0; i < numSlides; i++){
  //   gsap.set
  // }
  gsap.set(slides, {
    backgroundColor: () => {
      const num = Math.random() * 0xffffff;
      return '#' + parseInt(num).toString(16);
    },
    xPercent: i => i * 100
  });
  const wrapPartial = (min, max) => {
    const r = max - min;
    return value => {
      const v = value - min;
      return ((r + v % r) % r) + min;
    }
  };
  const wrap = wrapPartial(-100, (numSlides - 1) * 100);
  const timer = gsap.delayedCall(slideDelay, autoPlay);
  const animation = gsap.to(slides, {
    duration: 1,
    xPercent: "+=" + (numSlides * 100),
    ease: Linear.easeNone,
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: wrap
    }
  })
  const proxy = document.createElement("div");
  gsap.set(proxy, { x: "+=0"});
  const transform = gsap.getProperty(proxy);
  let slideAnimation = gsap.to({}, {duration:0.1});
  let slideWidth = 0;
  let wrapWidth = 0;
  resize();

  const draggable = Draggable.create(proxy, {
    trigger: ".slides-container",
    onPress: updateDraggable,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: {
      x: snapX
    }
  });
  window.addEventListener("resize", resize);
  prevButton.addEventListener("click", function(){
    animateSlides(1);
  });
  nextButton.addEventListener("click", function(){
    animateSlides(-1);
  });
  function autoPlay() {
    if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
      timer.restart(true);
    } else {
      animateSlides(-1);
    }
  }
  function resize() {
    const norm = (transform.x / wrapWidth) || 0;
    slideWidth = slides[0].offsetWidth;
    wrapWidth = slideWidth * numSlides;
    gsap.set(proxy, {x: norm * wrapWidth});
    animateSlides(0);
    slideAnimation.progress(1);
  }
  function updateDraggable() {
    timer.restart(true);
    slideAnimation.kill();
    this.update();
  }
  function animateSlides(direction) {
    timer.restart(true);
    slideAnimation.kill();

    const x = snapX(transform.x + direction * slideWidth);
    slideAnimation = gsap.to(proxy, {
      duration: slideDuration,
      x: x,
      onUpdate: updateProgress
    });
  }
  function updateProgress() {
    animation.progress(transform.x / wrapWidth);
  }
  function snapX(x) {
    return Math.round(x / slideWidth) * slideWidth;
  }
})();
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
  // repeat: -1,
  duration: 3,
  x: "+=150",
  modifiers: {
    x: function(x) {
      return (parseInt(x) % 150) + 'px';
    }
  }
});