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
		if (GBrowserIsCompatible()) {
			var bounds = new GLatLngBounds();
			var map = new GMap2(document.getElementById("map_canvas"));
			var contacts = this.get('content').getEach('guid');
			
			for (var i = 0; i < contacts.length; i++) {
				var point = this.get('locationContactMap')[contacts[i]];
				if (point) {
					map.addOverlay(createMarker(point, i));
					bounds.extend(point);
				} else {
					return;
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

function createMarker(point, index) {
	var baseIcon = new GIcon(G_DEFAULT_ICON);
	baseIcon.shadow = "http://www.google.com/mapfiles/shadow50.png";
	baseIcon.iconSize = new GSize(20, 34);
	baseIcon.shadowSize = new GSize(37, 34);
	baseIcon.iconAnchor = new GPoint(9, 34);
	baseIcon.infoWindowAnchor = new GPoint(9, 2);

	var letter = String.fromCharCode("A".charCodeAt(0) + index);
	var letteredIcon = new GIcon(baseIcon);
	letteredIcon.image = "http://www.google.com/mapfiles/marker" + letter + ".png";

	markerOptions = { icon:letteredIcon };
	var marker = new GMarker(point, markerOptions);
	
	GEvent.addListener(marker, "click", function() {
		marker.openInfoWindowHtml("Marker " + letter);
		// var node = document.createTextNode('blah');
		// marker.openInfoWindow(node);			
	});

	return marker;
}
