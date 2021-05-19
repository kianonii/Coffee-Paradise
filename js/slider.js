//slider 
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:1, // показывать по 1 слайду
        autoplay:false, // автоматическое проигрывание слайдов отключено 
        dots: true,
        dotsClass: 'slick-dots',
        appendArrows: $('.slider-control'),
        appendDots: $('.dots'),
        draggable: false,
        speed: 500,
    });
});

//bestsellers-slider 
$(document).ready(function(){
    $('.betsellers-slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1300,
        arrows: false,
        slidesToShow: 3.27,
        speed: 300,
        slidesToScroll: 1,
        draggable: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3.05,
                  slidesToScroll: 1,
                
            }
            }
        ]    
    });
});