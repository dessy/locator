// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

Locator.main = function main() {
  	Locator.getPath('mainPage.mainPane').append() ;
	
	var query = SC.Query.local(Locator.Contact, { orderBy: 'lastName' });
	var contacts = Locator.store.find(query);

	Locator.contactSearchController.set('content', contacts);

	function addAddressToMap(response) {
	if (!response || response.Status.code != 200) {
        locationContactMap[guid] = null;
      } else {
        place = response.Placemark[0];
        point = new GLatLng(place.Point.coordinates[1],
        place.Point.coordinates[0]);
		
		var query = SC.Query.local(Locator.Contact, { conditions: "location CONTAINS '" + response.name + "'" });
		var matches = Locator.store.find(query);
		
		for (var i = 0; i < matches.get('length'); i++) {
			Locator.mapController.addMapping(matches.objectAt(i).get('guid'), point);
		}
		Locator.mapController.changeMapMarkers();
      }
    }

	for (var i = 0; i < contacts.get('length'); i++) {
		var guid = contacts.objectAt(i).get('guid');
		var located = contacts.objectAt(i).get('location');

		var mappings = Locator.mapController.get('locationContactMap');
		if (!mappings[guid]) {
			var geocoder = new GClientGeocoder();
			geocoder.getLocations(located, addAddressToMap);			
		}
	}
	
} ;

function main() { Locator.main(); }
