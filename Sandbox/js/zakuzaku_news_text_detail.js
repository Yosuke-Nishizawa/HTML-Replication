const anime = gsap.timeline({paused: true})
                  .to(".detail", {
                    'bottom': -30,
                    'opacity': 0,
                    //  duration: 0.2,
                    //  ease: "none",
                      stagger: {
                        each: 0.1,
                        from: "start"
                      }

                    });
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  anime.play();
})
const reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click", function() {
  anime.reverse();
})