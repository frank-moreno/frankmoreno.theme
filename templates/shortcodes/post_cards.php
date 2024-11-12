<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function post_cards_shortcode() {

    // reset the query
    wp_reset_query();

    // WP_Query  arguments
    $args = array(
        'post_type'              => array( 'post' ),
        'post_status'            => array( 'publish' ),
        'posts_per_page'         => '3',
        'order'                  => 'ASC',
    );

    // The Query
    $query = new WP_Query( $args );

    // The Loop
    if ( $query->have_posts() ) {

        $output = '<div class="card-post">';

        while ( $query->have_posts() ) {
            $query->the_post();

            if (get_the_terms( get_the_ID(), 'language' )[0]-> slug == 'en') {

                $output .= '<div class="card">
                            <div class="card-body u-faux-box-link">
                                <div class="project-item__content">
                                    <h2 class="project-item__title">' . get_the_title() . '</h2>
                                    <div class="project-item__description">
                                        <p>' . mb_strimwidth(get_the_excerpt(), 0, 120, "...") . '</p> 
                                    </div>
                                    <div class="project-item__span">
                                        <span>View Post</span>
                                    </div> 
                                    <div class="project-item__link u-faux-box-link__overlay">
                                        <a class="u-faux-box-link__overlay" href="' . get_the_permalink() . '">View Post</a>
                                    </div>
                                </div>
                            </div>
                        </div>';

            }
        
        }

        $output .= '</div>';

    } else {
        // no posts found
    }

    // Restore original Post Data
    wp_reset_postdata();

    return $output;

}

add_shortcode( 'post_cards', 'post_cards_shortcode' );

?>