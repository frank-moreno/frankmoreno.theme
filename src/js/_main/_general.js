
var $ = jQuery;

$(document).ready(function () {

    $('form.wpcf7-form input').blur(function () {
        if (!$(this).val()) {
            if ($(this).attr('type') == 'text') {
                // alert('Please enter your name');
                $('form.wpcf7-form label.label_text').removeClass('moveup');
            }else if($(this).attr('type') == 'email'){
                // alert('Please enter your email');
                $('form.wpcf7-form label.label_email').removeClass('moveup');
            } else if($(this).attr('type') == 'tel'){
                // alert('Please enter your phone number');
                $('form.wpcf7-form label.label_phone').removeClass('moveup');
            }

        } else {
            if ($(this).attr('type') == 'text') {
                $('form.wpcf7-form label.label_text').addClass('moveup');
            }else if($(this).attr('type') == 'email'){
                $('form.wpcf7-form label.label_email').addClass('moveup');
            } else if($(this).attr('type') == 'tel'){
                $('form.wpcf7-form label.label_phone').addClass('moveup');
            } 
        }
    });

    $('form.wpcf7-form textarea').blur(function () {
        if (!$(this).val()) {
            $('form.wpcf7-form label.label_textarea').removeClass('moveup');
        } else {
            $('form.wpcf7-form label.label_textarea').addClass('moveup');
        }
    });

    $('header > div').append('<div id="menuToggle"><input type="checkbox" /> <span></span> <span></span> <span></span></div>');

    if($(window).width() <= 1024) {

        $('nav .wp-block-navigation__responsive-container').addClass('unactive');
    
        

        $('#menuToggle input').on('click', function () {
            $('nav .wp-block-navigation__responsive-container').toggleClass('unactive active');
        });

    }

    // add class on scroll down to add styles to header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header, header-es').addClass('scrolled');
        } else {
            $('header, header-es').removeClass('scrolled');
        }
    }
    );

    // add class to homepages header to add styles to header

    if ($('body').hasClass('home')) {
        $('.wp-block-navigation__responsive-container ul li').addClass('homepage-menu');
        $('.wp-block-site-title a').addClass('homepage-logo');
    }

});

