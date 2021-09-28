
(function ($) {
	"use strict";

    $(window).on('load', function () {
        // remove preloader
        $('.nm-ripple').fadeOut(500, function () {
            $('#nm-preloader').fadeOut(500);
        });
    });
})(jQuery)


function myFunction() {
    var x = document.getElementById("inputPassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  $(document).ready(function(){
    $('.collapse').on('show.bs.collapse', function (e) {
        $('.collapse').collapse("hide")
    })
})
