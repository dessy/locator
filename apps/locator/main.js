// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

Locator.main = function main() {

  	Locator.getPath('mainPage.mainPane').append() ;
	
	var query = SC.Query.local(Locator.Contact, { orderBy: 'lastName' });
	var contacts = Locator.store.find(query);
	
	var locationContactMap = {};
	
	// for (var i = 0; i < contacts.get('length'); i++) {
	// 	var guid = contacts.objectAt(i).get('guid');
	// 	var located = contacts.objectAt(i).get('location');
	// 
	// 	// jsonResult = JSON request to http://maps.google.com/maps/api/geocode/json?address=located&sensor=false
	// 	// coordinates = jsonResult.results[0].geometry.location; //(array [lat, lng])
	// 	// locationContactMap[guid] = coordinates;
	// 
	// 	locationContactMap[guid] = [1, 2];
	// }

	locationContactMap['LarryDavid'] = [34.0522342, -118.2436849];
	locationContactMap['CherylDavid'] = [34.0522342, -118.2436849];
	locationContactMap['JeffGreene'] = [40.7142691, -74.0059729];
	locationContactMap['RichardLewis'] = [40.7142691, -74.0059729];
	locationContactMap['TedDanson'] = [37.7749295, -122.4194155];
	locationContactMap['MaryDanson'] = [34.0522342, -118.2436849];
	locationContactMap['SusieGreene'] = [40.7142691, -74.0059729];
	
	Locator.mapController.set('locationContactMapping', locationContactMap);
	
	Locator.contactSearchController.set('content', contacts);
	
} ;

function main() { Locator.main(); }
