<?php
/**
 * Extension carrousel permet d'afficher dans une boite modale les images d'une galerie 
 * Package name: Carrousel
 * Version: 1.0.0
 */
/*
Plugin name: Carrousel
Author: Najmeddine
Description: Permet d'afficher dans une boite modale les images d'une galerie avec un système de navigation
*/

function carrousel_enqueue(){

    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    wp_enqueue_style('em_plugin_carrousel_css',
                    plugin_dir_url(__FILE__) . "style.css", // __FILE__ - fichier qui est en train d’être exécuté
                    array(),
                    $version_css);

    wp_enqueue_script('em_plugin_carrousel_js',
                    plugin_dir_url(__FILE__) ."js/carrousel.js",
                    array(),
                    $version_js,
                    true);
}

add_action('wp_enqueue_scripts', 'carrousel_enqueue'); 

function creation_carrousel(){

    return '<button class="bouton__ouvrir">Ouvrir</button>
        <div class="carrousel">
        <button class="bouton__x">✖</button>
        <button class="bouton__suivant">Suivant</button>
        <figure class="carrousel__figure"></figure>
        <button class="bouton__precedent">Précédent</button>
        <form class="carrousel__form"></form>
        </div>';
}




add_shortcode('carrousel', 'creation_carrousel'); // ajouter [carrousel] dans le texte d'article Ma gallerie accueil 