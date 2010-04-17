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

	locationContactMap: {},

	addMapping: function(guid, point) {
		var mapping = this.get('locationContactMap');
		mapping[guid] = point;
		this.set('locationContactMap', mapping);
	},

	changeMapMarkers: function() {
		var contacts = this.get('content').getEach('guid');

		for (var j = 0; j < contacts.length; j++) {
			if (!this.get('locationContactMap')[contacts[j]]) {
				return;
			}
		}

		if (GBrowserIsCompatible()) {
			var bounds = new GLatLngBounds();
			var map = new GMap2(document.getElementById("map_canvas"));
			
			for (var i = 0; i < contacts.length; i++) {
				var point = this.get('locationContactMap')[contacts[i]];
				if (point) {
					map.addOverlay(new GMarker(point));
					bounds.extend(point);
				}
			}

			var zoomLevel = map.getBoundsZoomLevel(bounds);
			if (zoomLevel > 15) {
				zoomLevel = 15;
			}

			map.setCenter(bounds.getCenter(), zoomLevel);	
			map.setUIToDefault();
		}
	},

	mapHTML: function() {
		this.changeMapMarkers();
	}.property('content').cacheable()

}) ;
