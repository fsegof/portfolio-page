<?php

/*
 * This file is part of the Symfony WebpackEncoreBundle package.
 * (c) Fabien Potencier <fabien@symfony.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace EWStarter;

use Symfony\Contracts\Service\ResetInterface;

interface EntrypointLookupInterface extends ResetInterface
{
	/**
	 * @param string $entryName
	 * @return array
	 * @throws EntrypointNotFoundException if an entry name is passed that does not exist in entrypoints.json
	 */
    public function getJavaScriptFiles(string $entryName): array;

	/**
	 * @param string $entryName
	 * @return array
	 * @throws EntrypointNotFoundException if an entry name is passed that does not exist in entrypoints.json
	 */
    public function getCssFiles(string $entryName): array;

    /**
     * Resets the state of this service.
     */
    public function reset();
}
