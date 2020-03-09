gsap.registerPlugin(Draggable);
const slideDelay = 1.5;
const slideDuration = 0.3;
const slides = document.querySelectorAll("#slide-sample .slide");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const numSlides = slides.length;
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
  ease: "none",
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
  const norm = (transform("x") / wrapWidth) || 0;
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

  const x = snapX(transform("x") + direction * slideWidth);
  slideAnimation = gsap.to(proxy, {
    duration: slideDuration,
    x: x,
    onUpdate: updateProgress
  });
}
function updateProgress() {
  const v = transform("x") / wrapWidth % 1;
  const n = v < 0 ? 1 + v : v;
  animation.progress(n);
}
function snapX(x) {
  return Math.round(x / slideWidth) * slideWidth;
}