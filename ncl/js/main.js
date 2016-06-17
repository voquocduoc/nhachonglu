jQuery(document).ready(function($) {
    $('.navbar-nav > li').hover(function() {
        $('.navbar-nav  > li').removeClass('current');
        $('.sub-menu').hide();
        $(this).children('.sub-menu').show();
    }, function() {
        /* Stuff to do when the mouse leaves the element */
    });

});
