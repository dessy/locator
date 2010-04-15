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
			var map = new GMap2(document.getElementById("map_canvas"));
			map.setCenter(new GLatLng(43.6702330, -79.3867550), 13);
			
			var bounds = map.getBounds();
			var sw = bounds.getSouthWest();
			var ne = bounds.getNorthEast();
			
			var lngSpan = ne.lng() - sw.lng();
			var latSpan = ne.lat() - sw.lat();
			
			for (var i = 0; i < 10; i++) {
				var point = new GLatLng(sw.lat() + latSpan * Math.random(), 
					sw.lng() + lngSpan * Math.random());
				map.addOverlay(new GMarker(point));
			}
			
			map.setUIToDefault();
		}
	}.property('content').cacheable()

}) ;
