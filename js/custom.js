// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
    Testimonial Slider
    =============================================== */ 

    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 600;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
            $('.navbar-brand').css('width','50%');
            $('.nav').css('padding-top','0%');
            $('.page-scroll').css('color','#333');
            $('.navbar-brand').html('<img src="images/logo_black.png">');
        } else {
            $('.navbar-default').removeClass('on');
            $('.navbar-brand').css('width','55%');
            $('.nav').css('padding-top','0.5%');
            $('.page-scroll').css('color','#fff');
            $('.navbar-brand').html('<img src="images/logo.png">');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })


}());


}
main();