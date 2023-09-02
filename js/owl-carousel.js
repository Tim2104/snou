$(document).ready(function(){
    
  $('.owl-carousel:eq(0)').owlCarousel(
    {
        loop:true,
        margin:10,
        center: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        responsive:{
            0:{
                items:1
            }
        }
    }
  );
    $('.owl-carousel:eq(1)').owlCarousel(
    {
        loop:true,
        margin:15,
        center: true,
        mouseDrag: true,
        touchDrag: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }
  );
});
