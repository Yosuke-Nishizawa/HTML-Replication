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
//main処理
(()=>{
  //初期処理
  init();
  //main animation生成
  const animation = createAnimation();
  // ???
  const proxy = document.createElement("div");
  gsap.set(proxy, { x: "+=0"});
  const transform = gsap.getProperty(proxy);
  // animationの更新関数定義
  function updateProgress() {
    const v = transform("x") / wrapWidth % 1;
    const n = v < 0 ? 1 + v : v;
    animation.progress(n);
  }
  const timer = gsap.delayedCall(slideDelay, function(){
    if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
      timer.restart(true);
    } else {
      animateSlides(-1);
    }
  });
  const draggable = createDraggable(proxy, )
})();
function init(){
  //slideにランダムで色付けを行う
  gsap.set(slides, {
    backgroundColor: () => {
      const num = Math.random() * 0xffffff;
      return '#' + parseInt(num).toString(16);
    },
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
//ドラッグアニメーションの生成
function createDraggable(dragTarget, timer, slideAnimation, updateProgress) {
  const draggable = Draggable.create(dragTarget, {
    trigger: ".slides-container",
    //update draggable
    onPress: function(){
      timer.restart(true);
      slideAnimation.kill();
      this.update();
    },
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: {
      x: snapX
    }
  });

}
function snapX(x) {
  return Math.round(x / slideWidth) * slideWidth;
}
let slideAnimation = gsap.to({}, {duration:0.1});
let slideWidth = 0;
let wrapWidth = 0;
resize();

window.addEventListener("resize", resize);
prevButton.addEventListener("click", function(){
  animateSlides(1);
});
nextButton.addEventListener("click", function(){
  animateSlides(-1);
});
function resize() {
  const norm = (transform("x") / wrapWidth) || 0;
  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;
  gsap.set(proxy, {x: norm * wrapWidth});
  animateSlides(0);
  slideAnimation.progress(1);
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