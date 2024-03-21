import projectManifest from '../manifest.json';
import {createElement} from '@wordpress/element';
import {useInnerBlocksProps, useBlockProps} from '@wordpress/block-editor';

/**
 * Helper for gutenberg block registration
 */
class BlockRegistrationHelper {
  /**
   * Creates block name based on its name in block manifest
   * and project namespace in global manifest
   *
   * @param manifest Block manifest
   * @returns {string}
   */
  static getBlockName(manifest) {
    const {projectNamespace} = projectManifest;
    const {blockName} = manifest;
    if (!blockName) throw new Error('Required field "blockName" is missing from the manifest.');

    return [projectNamespace, blockName].join('/');
  }

  /**
   * Creates block options used in block registration
   *
   * @param editComponent Block 'edit' function
   * @param manifest Block manifest
   * @param customOptions Additional options object
   * @returns {{blockName: *, title: *, description: *, category: *, keywords: *, supports: *, parent: *, styles: *, example: *, icon: (* | string), save: *, edit: *}}
   */
  static getBlockOptions(editComponent, manifest, customOptions = {}) {
    const {
      blockName,
      title,
      description,
      category,
      keywords,
      supports,
      parent,
      hasInnerBlocks,
      innerBlocksElement = 'div',
      styles,
      icon,
      example
    } = manifest;

    return {
      blockName,
      title,
      description,
      category,
      keywords,
      supports,
      parent,
      styles,
      example,
      icon: icon || 'block-default',
      save: (hasInnerBlocks
        ? () => {
          const blockProps = useBlockProps.save();
          const innerBlocksProps = useInnerBlocksProps.save(blockProps);

          return createElement(innerBlocksElement, innerBlocksProps);
        }
        : () => null),
      ...customOptions,
      edit: editComponent,
    };
  }
}

export default BlockRegistrationHelper;
