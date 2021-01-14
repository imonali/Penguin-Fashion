// Owl Carousel Startup Codes
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Counter Up Startup Codes
$('.counter').counterUp({
    delay: 10,
    time: 1000
});