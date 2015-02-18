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

$(document).ready(function(){
  $("#submit").click(function(){
    var email = $("#subscribe-email").val();

    var dataString = 'email='+ email;
    if(email=='')
    {
      alert("Please Fill All Fields");
    }
    else
    {
// AJAX Code To Submit Form.
$.ajax({

  url: "//formspree.io/admin@mushroomlearning.com", 
  type: "POST",
  data: dataString,
  cache: false,
  success: function(result){
    alert(result);
  }
});
}
return false;
});
});
