
var $ = jQuery;

$(document).ready(function () {

    // add class on scroll down to add styles to header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    }
    );

    // add class to homepages header to add styles to header

    if ($('body').hasClass('home')) {
        $('.wp-block-navigation__responsive-container ul li').addClass('homepage-menu');
        $('.wp-block-site-title a').addClass('homepage-logo');
    }

    


});