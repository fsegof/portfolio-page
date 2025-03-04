<?php

/*
 * This file is part of the Symfony WebpackEncoreBundle package.
 * (c) Fabien Potencier <fabien@symfony.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace EWStarter;

/**
 * Returns the CSS or JavaScript files needed for a Webpack entry.
 *
 * This reads a JSON file with the format of Webpack Encore's entrypoints.json file.
 *
 * @final
 */
class EntrypointLookup implements EntrypointLookupInterface, IntegrityDataProviderInterface
{
    private $entrypointJsonPath;

    private $entriesData;

    private $returnedFiles = [];

    private $strictMode;

    public function __construct(string $entrypointJsonPath, bool $strictMode = true)
    {
        $this->entrypointJsonPath = $entrypointJsonPath;
        $this->strictMode = $strictMode;
    }

    public function getJavaScriptFiles(string $entryName): array
    {
        return $this->getEntryFiles($entryName, 'js');
    }

    public function getCssFiles(string $entryName): array
    {
        return $this->getEntryFiles($entryName, 'css');
    }

    public function getIntegrityData(): array
    {
        $entriesData = $this->getEntriesData();

        if (!\array_key_exists('integrity', $entriesData)) {
            return [];
        }

        return $entriesData['integrity'];
    }

    /**
     * Resets the state of this service.
     */
    public function reset()
    {
        $this->returnedFiles = [];
    }

    private function getEntryFiles(string $entryName, string $key): array
    {
        $this->validateEntryName($entryName);
        $entriesData = $this->getEntriesData();
        $entryData = $entriesData['entrypoints'][$entryName] ?? [];

        if (!isset($entryData[$key])) {
            // If we don't find the file type then just send back nothing.
            return [];
        }

        // make sure to not return the same file multiple times
        $entryFiles = $entryData[$key];
        $newFiles = array_values(array_diff($entryFiles, $this->returnedFiles));
        $this->returnedFiles = array_merge($this->returnedFiles, $newFiles);

        return $newFiles;
    }

    private function validateEntryName(string $entryName)
    {
        $entriesData = $this->getEntriesData();
        if (!isset($entriesData['entrypoints'][$entryName]) && $this->strictMode) {
            $withoutExtension = substr($entryName, 0, strrpos($entryName, '.'));

            if (isset($entriesData['entrypoints'][$withoutExtension])) {
                throw new EntrypointNotFoundException(sprintf('Could not find the entry "%s". Try "%s" instead (without the extension).', $entryName, $withoutExtension));
            }

            throw new EntrypointNotFoundException(sprintf('Could not find the entry "%s" in "%s". Found: %s.', $entryName, $this->entrypointJsonPath, implode(', ', array_keys($entriesData))));
        }
    }

    private function getEntriesData(): array
    {
        if (null !== $this->entriesData) {
            return $this->entriesData;
        }

        if (!file_exists($this->entrypointJsonPath)) {
            if (!$this->strictMode) {
                return [];
            }
            throw new \InvalidArgumentException(sprintf('Could not find the entrypoints file from Webpack: the file "%s" does not exist.', $this->entrypointJsonPath));
        }

        $this->entriesData = json_decode(file_get_contents($this->entrypointJsonPath), true);

        if (null === $this->entriesData) {
            throw new \InvalidArgumentException(sprintf('There was a problem JSON decoding the "%s" file', $this->entrypointJsonPath));
        }

        if (!isset($this->entriesData['entrypoints'])) {
            throw new \InvalidArgumentException(sprintf('Could not find an "entrypoints" key in the "%s" file', $this->entrypointJsonPath));
        }

        return $this->entriesData;
    }
}
