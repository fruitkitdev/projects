$(document).ready(function()
  {

    $('.slider').slick({
       autoplay: true,
       autoplaySpeed: 4000,
       dots: true,
       arrows: true,
       pauseOnHover: false
    });

    $('.favorit').slick({
       dots: true,
       arrows: false,
       slidesToShow: 3,
  	   slidesToScroll: 3
    });
    
  });