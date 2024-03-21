<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Starter_Theme
 */

// Create the view model
$view_model = [
	'jsFile'   => '',
	'bodyClass' => 'page-404',
	'vm'        => new \EWStarter\BaseViewModel()
];

// Render view
$ew_twig->render( 'pages/404-page/404-page.twig', $view_model );
