var tickMax = 1;
var tickCurr = 0;
var isHidden = false;
var animeId;

var $logo = $('#logo');

var showHideLogo = function() {
  if(isHidden) {
    $logo.css('opacity', 0);
  } else {
    $logo.css('opacity', 1);
  }
}

var tick = function() {
  if(tickCurr >= tickMax) {
    if(isHidden) {
      isHidden = false;
    } else {
      isHidden = true;
    }
    tickCurr = 0;
  } else {
    tickCurr += 1;
  }
  showHideLogo();
  animeId = requestAnimationFrame(tick);
};

$(function() {

  $logo.mouseenter(function() {
    animeId = requestAnimationFrame(tick);
  })
  .mouseleave(function() {
    tickCurr = 0;
    isHidden = false;
    showHideLogo();
    cancelAnimationFrame(animeId);
  });

});
