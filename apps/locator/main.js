// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

Locator.main = function main() {

  	Locator.getPath('mainPage.mainPane').append() ;
	
	var query = SC.Query.local(Locator.Contact, { orderBy: 'lastName' });
	var contacts = Locator.store.find(query);
	
	var locationContactMap = {};
	
	for (var i = 0; i < contacts.get('length'); i++) {
		var guid = contacts.objectAt(i).get('guid');
		var located = contacts.objectAt(i).get('location');
		
		// locationDetails = JSON request to http://maps.google.com/maps/api/geocode/json?address=located&sensor=false
		// parse JSON and determine coordinates (array [lat, lng])
		// locationContactMap[guid] = coordinates;
		locationContactMap[guid] = [1, 2];
	}
	
	Locator.mapController.set('locationContactMapping', locationContactMap);
	
	Locator.contactSearchController.set('content', contacts);
	
} ;

function main() { Locator.main(); }
