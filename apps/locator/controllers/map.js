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
			var swBounds = new GLatLng(43.6429, -79.4673, false);
			var neBounds = new GLatLng(43.6975, -79.3060, false);
			
			var bounds = new GLatLngBounds(swBounds, neBounds)

			var map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(bounds.getCenter(), map.getBoundsZoomLevel(bounds));	

			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			
			var lngSpan = ne.lng() - sw.lng();
			var latSpan = ne.lat() - sw.lat();
			
			for (var i = 0; i < coordinates.length; i++) {
				var point = new GLatLng(sw.lat() + latSpan * Math.random(), 
					sw.lng() + lngSpan * Math.random());
				map.addOverlay(new GMarker(point));
			}
			
			map.setUIToDefault();
		}
	}.property('content').cacheable()

}) ;
