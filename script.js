$(document).ready(function () {
  //Click On Toggle
  $(document).on("click",".toggle", function(){
    $(".r-side").toggleClass("back");
  });

  //Scroll To Top Button
  var btn = $(".scr-top");
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
      btn.fadeIn(800);
    } else {
      btn.fadeOut(800);
    }
  });

  //Click Button To Scroll Top
  $(".scr-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
  });

  //Nav Links
  $(".links li a").on("click", function(){
    $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");

    $(".r-side").removeClass("back");
  })
});



//Owl Carousel
$('.owl-carousel-services').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

//Owl Carousel
$('.owl-carousel-review').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
