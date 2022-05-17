/*first slider*/

$(".slider-one")
.not(".slick-initialized")
.slick({   
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next"
});

/*second slider */
$(".slider-two")
.not(".slick-initialized")
.slick({   

    prevArrow:".home-parks-slider .slider-btn .prev",
    nextArrow:".home-parks-slider .slider-btn .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000, 
});


