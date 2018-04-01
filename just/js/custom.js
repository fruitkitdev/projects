$(document).ready(function(){
    //Head
//    $(window).scroll(function() {
//            if ($(this).scrollTop() > 50){  
//                $('header').css({background: "rgba(255, 250, 250, 0.95)", borderColor: "#ddd", transition: "0.5s"});
//            }
//            else
//            {
//                 $('header').css({background: "transparent", borderColor: "transparent", transition: "0.5s"});
//            }
//    });
    
    //Scroll
    $('.c1').click(function(){
            $('html, body').animate({scrollTop: $('.edu').offset().top - 20}, 'slow');
    });
    $('.c2').click(function(){
            $('html, body').animate({scrollTop: $('.about').offset().top - 40}, 'slow');
    });
    $('.c3').click(function(){
            $('html, body').animate({scrollTop: $('.call').offset().top - 40}, 'slow');
    });
    $('.c4').click(function(){
            $('html, body').animate({scrollTop: $('.portfolio').offset().top - 40}, 'slow');
    });
    $('.c5').click(function(){
            $('html, body').animate({scrollTop: $('footer').offset().top - 40}, 'slow');
    });
    
    $('.portfolio section').click(function(){
       $('.modal_wrap').fadeIn(300);
       $('body').css({overflow: 'hidden'});
       
       var img = $(this).attr('data-img');
       $('.port_modal img').attr('src', './upload/' + img);
       
        
    });
    
    $('.modal_wrap').click(function(){
       $('.modal_wrap').fadeOut(300);
       $('body').css({overflow: 'auto'});
        
    });


    $('#send').submit(function(){
      
      var c_name = $('#name').val();
      var c_phone = $('#phone').val();
      var c_email = $('#email').val();
  
      if(c_name != '' || c_phone != '')
      {
        $.post('./send.php', {func: 'send', c_name: c_name, c_phone: c_phone, c_email: c_email}, function(){
          $('.success').fadeIn().delay(2000).fadeOut();
          setTimeout('window.location.reload()', 3000);
        });
      }

      return false;
   });
    
});