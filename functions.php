<?php

add_action( 'wp_enqueue_scripts', 'enqueue_avada_child' );
function enqueue_avada_child()
{
        wp_enqueue_style('avada-child-css', '/wp-content/themes/ganymede/style.css');
        wp_enqueue_script('avada-child-js', '/wp-content/themes/ganymede/dist/js/script.js', array( 'jquery' ), '1.0', true );
}

if ( is_page_template( 'page-careers.php' ) ) {
    require get_stylesheet_directory_uri() . '/inc/functions-careers.php';
}

?>