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
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  anime.play();
})
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