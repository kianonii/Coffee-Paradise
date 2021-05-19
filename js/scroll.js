// header fill on scroll 
var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
        header.addClass('scrolled');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#to-top-btn').fadeIn();
    } else {
        $('#to-top-btn').fadeOut();
    }
    });
        $('#to-top-btn').click(function() {
        $('body,html').animate({scrollTop:0}, 100);
    });
});

