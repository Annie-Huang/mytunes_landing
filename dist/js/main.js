// Responsive Nav
$(function() {
    menu = $('nav ul');

    $('#openup').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(e) {
        var w = $(window).width(); if(w < 480 ) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
    // this.hash is #showcase, #music, etc
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        // 800 is the speed in milliseconds.
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function() {
                window.location.hash = hash;
            }
        );
    }
});
