<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function theme_assets() {
    
    // load styles, bootstrap main file
    wp_enqueue_style( 'stylesheet-bootstrap523', get_template_directory_uri() . '/assets/bootstrap-5.2.3-dist/css/bootstrap.min.css' );
    // load styles, swiper main file
    wp_enqueue_style( 'stylesheet-swiper', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' );
    // main theme styles
    wp_enqueue_style( 'styles', get_stylesheet_directory_uri() .'/dist/scss/theme-main.css', [], '', 'all' ); 

    // load scripts, js bootstrap main file
    wp_enqueue_script( 'script-bootstrap523', get_template_directory_uri() . '/assets/bootstrap-5.2.3-dist/js/bootstrap.min.js', '', '', true ); 
    // load scripts, js swiper main file
    wp_enqueue_script( 'script-swiper', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js', '', '', true );
    // main theme scripts
    wp_enqueue_script( 'theme-js', get_stylesheet_directory_uri() .'/dist/js/theme-main.js', ['jquery'], '', 'all' );

    }

add_action( 'wp_enqueue_scripts', 'theme_assets' );


include( get_template_directory() . '/templates/shortcodes/work_projects.php' );

include( get_template_directory() . '/templates/shortcodes/work_projects_cards.php' );

include( get_template_directory() . '/templates/shortcodes/post_projects.php' );




