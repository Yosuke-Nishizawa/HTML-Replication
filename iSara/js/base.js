(function(){
  const setRotateDeg = function(event, deg) {
    const id = event.currentTarget.id;
    $(`[data-target='#${id}'].arrow-page12`).css("transform",`translate(0, -50%) rotate(${deg}deg)`);
  }
  $(".collapse")
    .on("show.bs.collapse", event => setRotateDeg(event, 225))
    .on("hide.bs.collapse", event => setRotateDeg(event, 45));
  // page12 最初のアコーディオンを開いておく
  $(".list-page12>.item:first-of-type .collapse").collapse('show');
})();