// ==========================================================================
// Project:   Locator.mapController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Locator */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Locator.mapController = SC.ObjectController.create(
/** @scope Locator.mapController.prototype */ {

	contentBinding: 'Locator.contactSearchController.results',

	// mapHTML: '<html><body>this is the <b>VALUE</b> of the <b>LABEL</b></body></html>'

	mapHTML: function() {
		if (GBrowserIsCompatible()) {
			var map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(new GLatLng(37.4419, -122.1419), 13);
			map.setUIToDefault();
		}
	}.property('content').cacheable()

}) ;
