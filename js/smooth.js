(function(){
    //efecto smooth
    $('a.scroll').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
    // codigo para personalizar el scroll
    $(document).ready(function(){
        $("html").niceScroll({
            cursorcolor:"#00ffff",
            zindex: 1100,
            cursorborderradius: 3,
            cursorborder:".5px solid #ffffff",
            horizrailenabled: false,
            cursorfixedheight: 10,
            cursorwidth:"8px",
        })
    })
}());
