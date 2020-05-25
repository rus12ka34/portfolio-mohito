$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 20,
    nav: true,
    navText: ['<div class="new-btn"><div class="btn__prev"><div class="arrow-top"></div><div class="arrow-bottom"></div></div></div>','<div class="new-btn"><div class="btn-next"><div class="arrow-top"></div><div class="arrow-bottom"></div></div></div>'],
    loop: true,
    responsive:{
    	0:{
            items:1
        },
    	570:{
            items:1
        },
        770:{
            items:2
        },
        990:{
            items:3
        },
        1200:{
            items:4
        }
    }
  });
});

$('.owl-carousel-second').owlCarousel({
	items: 3,
    loop:true,
    margin:20,
    nav: true,
    dots: false,
    navText: ['<div class="btn__prev inspired-btn-left"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>','<div class="btn-next inspired-btn-right"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>'],
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
})