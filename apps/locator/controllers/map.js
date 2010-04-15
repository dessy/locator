// ==========================================================================
// Project:   Locator.mapController
// ==========================================================================
/*globals Locator */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Locator.mapController = SC.ObjectController.create(
{

	contentBinding: 'Locator.contactSearchController.results',

	locationContactMapping: {},

	mapHTML: function() {
		contacts = this.get('content').getEach('guid');

		var coordinates = [];
		for (var i = 0; i < contacts.length; i++) {
			coordinates.push(this.get('locationContactMapping')[contacts[i]]);
		}
		
		if (GBrowserIsCompatible()) {
			var bounds = new GLatLngBounds();
			var map = new GMap2(document.getElementById("map_canvas"));
			
			for (var i = 0; i < coordinates.length; i++) {
				var point = new GLatLng(coordinates[i][0], coordinates[i][1], false);
				map.addOverlay(new GMarker(point));
				bounds.extend(point)
			}

			map.setCenter(bounds.getCenter(), map.getBoundsZoomLevel(bounds));	
			map.setUIToDefault();
		}
	}.property('content').cacheable()

}) ;
