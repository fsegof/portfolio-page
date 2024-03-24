<?php
/**
 * The template for displaying all pages
 */


// Create view model
$view_model = [
	'jsFile' => '',
	'bodyClass' => 'single-page',
	'vm' => new \EWStarter\SinglePostViewModel(get_post())
];

// Render view
$ew_twig->render('pages/single-page/single-page.twig', $view_model);
