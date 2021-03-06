/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module ui/toolbar/toolbarseparatorview
 */

import View from '../view';
import Template from '../template';

/**
 * The toolbar separator view class.
 *
 * @extends module:ui/view~View
 */
export default class ToolbarSeparatorView extends View {
	/**
	 * @inheritDoc
	 */
	constructor( locale ) {
		super( locale );

		this.template = new Template( {
			tag: 'span',
			attributes: {
				class: [
					'ck-toolbar__separator'
				]
			}
		} );
	}
}
