(function() {
  var wb, hb;

  function resizeBody() {
    wb = document.documentElement.clientWidth;
    hb = document.documentElement.clientHeight;
    if (hb >= wb) {
      $('body').css({
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: hb,
        height: wb,
        '-webkit-transform': 'translate( -50%, -50%) rotate( 90deg)',
        transform: 'translate( -50%, -50%) rotate( 90deg)',
      });
    } else {
      $('body').css({

        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: wb,
        height: hb,

        '-webkit-transform': 'translate( -50%, -50%) rotate( 0deg)',
        transform: 'translate( -50%, -50%) rotate( 0deg)',
      });
    }
  }
  resizeBody();
  window.addEventListener("resize", resizeBody, false);
})()
