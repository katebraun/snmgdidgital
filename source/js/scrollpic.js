var lastScrollTop = 500;

$(window).scroll(function() {
    var st = $(this).scrollTop();
    if(st > lastScrollTop) {
        $('.town').css('background-position', '+=10px');
    } else {
        $('.town').css('background-position', '+=-10px');
    }
    lastScrollTop = st;
});
