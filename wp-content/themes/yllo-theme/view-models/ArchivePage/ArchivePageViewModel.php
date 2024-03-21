<?php

namespace EWStarter;

/**
 * Class ArchivePageViewModel
 * @package EWStarter
 */
class ArchivePageViewModel extends BaseViewModel {
	/**
	 * @var array
	 */
	public $posts;

	/**
	 * @var int
	 */
	public $currentPage;

	/**
	 * @var int
	 */
	public $pagesTotal;

	/**
	 * @var int
	 */
	public $postsPerPage;
}