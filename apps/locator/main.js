// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

Locator.main = function main() {
  	
	Locator.getPath('mainPage.mainPane').append() ;
	
	var query = SC.Query.local(Locator.Contact, { orderBy: 'lastName' });
	var contacts = Locator.store.find(query);

	Locator.contactSearchController.set('content', contacts);
	
	SC.forEachRecord(contacts, function(contact) {
		var guid = contact.get('guid');
		var located = contact.get('location');

		var mappings = Locator.mapController.get('locationContactMap');
		if (!mappings[guid]) {
			var geocoder = new GClientGeocoder();
			geocoder.getLocations(located, addAddressToMap);			
		}
	});
	
} ;

function addAddressToMap(response) {
	if (!response || response.Status.code != 200) {
        locationContactMap[guid] = null;
    } else {
        place = response.Placemark[0];
        point = new GLatLng(place.Point.coordinates[1], place.Point.coordinates[0]);
	
		var matchQuery = SC.Query.local(Locator.Contact, { conditions: "location = '" + response.name + "'" });
		var matches = Locator.store.find(matchQuery);
	
		SC.forEachRecord(matches, function(match) {
			Locator.mapController.addMapping(match.get('guid'), point);
		});

		Locator.mapController.changeMapMarkers();
    }
}

function main() { Locator.main(); }
