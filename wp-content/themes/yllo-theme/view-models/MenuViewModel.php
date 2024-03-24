<?php

namespace EWStarter;

use \Exception;

/**
 * Class Menu_View_Model
 * @package EWStarter
 */
class MenuViewModel {
	/**
	 * @var int
	 */
	public $id;

	/**
	 * @var false|\WP_Term
	 */
	public $menu;

	/**
	 * @var string
	 */
	public $name;

	/**
	 * @var array
	 */
	public $items;

	/**
	 * MenuViewModel constructor.
	 *
	 * @param string $menu_name
	 *
	 * @throws Exception
	 */
	public function __construct( $menu_name ) {

		// If empty menu name
		if ( empty( $menu_name ) ) {
			// Throw exception
			throw new Exception( 'Menu name have to be passed as argument to MenuViewModel.' );
		}

		// Get menu
		$menu = $this->get_nav_menu_object_by_name( $menu_name );

		// If menu not found
		if ( ! empty( $menu ) ) {
			// Sets menu object
			$this->menu  = $menu;
			$this->id    = $menu->term_id;
			$this->name  = $menu->name;
			$this->items = $this->get_nav_menu_items( $menu );
		}
	}

	/**
	 * Get navigation menu object by name.
	 *
	 * @param $menu_name
	 *
	 * @return false|\WP_Term
	 */
	protected function get_nav_menu_object_by_name( $menu_name ) {
		// If there are any nav menus
		if ( ( $locations = get_nav_menu_locations() ) && isset( $locations[ $menu_name ] ) ) {

			// Get nav menu object
			$menu = wp_get_nav_menu_object( $locations[ $menu_name ] );

			// Returns menu
			return $menu;
		}

		return null;
	}

	/**
	 * Gets list of navigation menu items.
	 *
	 * @param   mixed $menu
	 *
	 * @return  array
	 */
	protected function get_nav_menu_items( $menu ) {
		global $wp;

		// Initialize empty list of menu items
		$nav_menu_items = [];

		// Get nav menu items
		$items = wp_get_nav_menu_items( $menu->term_id );

		// Get current page link
		$current_page_permalink = home_url( $wp->request ) . '/';

		// Create nav menu items
		foreach ( $items as $item ) {

			$item_data = [
				'id'        => $item->ID,
				'label'     => $item->title,
				'link'      => $item->url,
				'class'		=> implode(' ', $item->classes),
				'target'    => $item->target,
				'is_active' => $item->url == $current_page_permalink
			];

			if ( ! empty( $item->menu_item_parent ) ) {
				$this->add_child_menu_item( $nav_menu_items, $item->menu_item_parent, $item_data );
			} else {
				$nav_menu_items[] = $item_data;
			}
		}

		// Return items
		return $nav_menu_items;
	}

	/**
	 * Adds child menu item
	 *
	 * @var array $menu_items
	 * @var string $parent_item_id
	 * @var array $child_item
	 */
	protected function add_child_menu_item( &$menu_items, $parent_item_id, $child_item ) {

		foreach ( $menu_items as &$menu_item ) {
			if ( ! empty( $menu_item['children'] ) ) {
				$this->add_child_menu_item( $menu_item['children'], $parent_item_id, $child_item );
			}

			if ( $menu_item['id'] != $parent_item_id ) {
				continue;
			}

			if ( empty( $menu_item['children'] ) ) {
				$menu_item['children'] = [];
			}

			$menu_item['children'][] = $child_item;

			return;
		}
	}
}
