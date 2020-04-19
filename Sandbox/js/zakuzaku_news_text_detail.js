const anime = gsap.to(".detail", {
                    'bottom': 0,
                    'opacity': 1,
                     duration: 5,
                     ease: "none",
                     paused: true,
                      stagger: {
                        each: 5,
                        from: "start"
                      }
                    });
const reverseButton = document.getElementById("reverse");
reverseButton.addEventListener("click", function() {
  anime.reverse();
})
const seekbar = document.getElementById("seekbar");
const setSeekbarVal = function(){
  const val = this.value;
  document.getElementById("seekbarVal").textContent = val;
  anime.progress(parseFloat(val) / 100);
}
seekbar.addEventListener("change", setSeekbarVal);
seekbar.addEventListener("input", setSeekbarVal);

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
})
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  seekAnime.play();
})