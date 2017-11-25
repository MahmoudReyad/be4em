$(document).ready(function(){
    // Typed.js Plugin
    var typed = new Typed("#typed", {
      // Waits 1000ms after typing "First"
      strings: [" Is the fastest growing E-marketing and web design Company, managed to approve its success in internet solutions field in a short period of time. Only in five years, Be Group managed to overcome the similarity in E-marketing and web design"+"<br>"+"Contact us Now:" +"<br>"+"<span>"+"Saudi Arabia: 00966598018989 "+ "<br>"+ "Egypt: +2 011 5441 3311"+"</span>"],
      typeSpeed : 50
    });
    // nicescroll
    $(function() {
        $("body").niceScroll({
          cursorcolor: "#000"
        });
    });
    // Scroll Top Visibilaity
    // if($(this).scrollTop() != $('.our_services').offset().top)
    //   $('.scrolltop').css("display" , "none");
    $(window).on('scroll' , function(){
      if($(this).scrollTop() >= $('.our_services').offset().top)
      {
        $('.scrolltop i').fadeIn(500);
      }
      else {
        $('.scrolltop i').fadeOut(500);
      }
    });
    // Scroll Top Button
    $('.scrolltop').on("click" , function(){
      $('html , body').animate(
        {
        scrollTop :0,
      } , 1000);
    });
      // Wow Js
       new WOW().init();
});
