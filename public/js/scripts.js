(function ($) {
  $(document).ready(function(){
    
  // hide .navbar first
  $("#navbar2").hide();
  
  // fade in .navbar
  $(function () {
    $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
      if ($(this).scrollTop() > 550) {
        $('#navbar2').fadeIn();
      } else {
        $('#navbar2').fadeOut();
      }
    });

  
  });

});
  }(jQuery));