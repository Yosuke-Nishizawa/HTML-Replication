const anime = gsap.to(".detail", {
                    'bottom': 0,
                    'opacity': 1,
                     duration: 5,
                     ease: "none",
                     paused: true,
                      stagger: {
                        each: 5,
                        from: [2, 0, 1]
                        // from: "start"
                      }
                    });
const details = document.querySelectorAll(".detail");
const anime2 = 
    (function(){
        const from = {'bottom': -30, 'opacity': 0};
        const up = {
          'bottom': '+=30',
          'opacity': '+=1',
        };
        const down = {
          'bottom': '-=30',
          'opacity': '-=1',
        };
        return gsap.timeline({
          repeat: -1,
          paused: true, 
          defaults: {
             duration: 5,
             ease: "none",
          }
        })
        .to(details[0], up, 'start').to(details[2], down, 'start')
        .to(details[1], up, 'start+=5').to(details[0], down, 'start+=5')
        .to(details[2], up, 'start+=10').to(details[1], down, 'start+=10');
        // return gsap.timeline({
        //   repeat: -1,
        //   paused: true, 
        //   defaults: {
        //     // 'bottom': 0,
        //     // 'opacity': 1,
        //     'bottom': '+=30',
        //     'opacity': '+=1',
        //      duration: 5,
        //      ease: "none",
        //   }
        // })
        // .to(details[0], {})
        // .to(details[1], {})
        // .to(details[2], {});
    })();
const anime3 = 
    (function(){
        const from = {'bottom': 0, 'opacity': 1};
        return gsap.timeline({
          repeat: -1,
          paused: true, 
          defaults: {
            'bottom': '-=30',
            'opacity': '-=1',
            // 'bottom': -30,
            // 'opacity': 0,
             duration: 5,
             ease: "none",
          }
        })
        .to(details[2], {})
        .to(details[0], {})
        .to(details[1], {});
    })();
const reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click", function() {
  anime.reverse();
})
const seekbar = document.getElementById("seekbar");
const setSeekbarVal = function(){
  const val = this.value;
  document.getElementById("seekbarVal").textContent = val;
  anime2.progress(parseFloat(val) / 100);
  anime3.progress(parseFloat(val) / 100);
}
// seekbar.addEventListener("change", setSeekbarVal);
// seekbar.addEventListener("input", setSeekbarVal);

const proxy = document.createElement("div");
const proxyProp = gsap.getProperty(proxy);
console.log(proxyProp("x"));
const seekAnime = gsap.to(proxy, {
  duration: 1,
  x: 100,
  ease: "none",
  paused: true,
  onUpdate: function() {
    seekbar.value = proxyProp("x");
  }
});
const timer = gsap.delayedCall(5, function() {
  timer.restart(true);
  const x = proxyProp("x") + (100 / 3);
  const smallProxy = document.createElement("div");
  gsap.set(smallProxy, {x: proxyProp("x")});
  gsap.to(smallProxy, {
    duration: 1,
    x: x,
    onUpdate: function() {
      const progress = gsap.getProperty(smallProxy, "x") / 100;
      console.log(progress);
      seekAnime.progress(progress);
      anime2.progress(progress);
      // anime3.progress(progress);
    },
    modifiers: {
      x: x => {
        const newX = (100 + parseFloat(x)) % 100;
        return newX + "px";
      }
    }
  })
})
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  seekAnime.play();
})
document.getElementById("pause").addEventListener("click", function(){
  timer.pause();
});
document.getElementById("restart").addEventListener("click", function(){
  timer.resume();
});