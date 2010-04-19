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

	createMarker: function(point, index) {
		var baseIcon = new GIcon(G_DEFAULT_ICON);
		baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png";
		baseIcon.iconSize = new GSize(20, 34);
		baseIcon.shadowSize = new GSize(37, 34);
		baseIcon.iconAnchor = new GPoint(9, 34);
		baseIcon.infoWindowAnchor = new GPoint(9, 2);
		
		// Create a lettered icon for this point using our icon class
		 var letter = String.fromCharCode("A".charCodeAt(0) + index);
		 var letteredIcon = new GIcon(baseIcon);
		 letteredIcon.image = "http://www.google.com/mapfiles/marker" + letter + ".png";

		 // Set up our GMarkerOptions object
		 markerOptions = { icon:letteredIcon };
		 var marker = new GMarker(point, markerOptions);

		 GEvent.addListener(marker, "click", function() {
		   marker.openInfoWindowHtml("Marker <b>" + letter + "</b>");
		 });
		
		 return marker;
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
					var icon = new GIcon(G_DEFAULT_ICON);
					markerOptions = { icon:icon };
					var marker = new GMarker(point, markerOptions);

					map.addOverlay(this.createMarker(point, i));
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
