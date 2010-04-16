// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

Locator.main = function main() {

  	Locator.getPath('mainPage.mainPane').append() ;
	
	var query = SC.Query.local(Locator.Contact, { orderBy: 'lastName' });
	var contacts = Locator.store.find(query);

	Locator.contactSearchController.set('content', contacts);
	
	// for (var i = 0; i < contacts.get('length'); i++) {
	// 	var guid = contacts.objectAt(i).get('guid');
	// 	var located = contacts.objectAt(i).get('location');
	// 
	// 	var geocoder = new GClientGeocoder();
	// 	geocoder.getLatLng(
	// 		located,
	// 	    function(point) {
	// 	    	if (!point) {
	// 				// locationContactMap[guid] = null;
	// 	      	} else {
	// 				alert(guid + ' ' + point);
	// 				// Locator.mapController.addMapping(guid, point);
	// 				// Locator.mapController.changeMapMarkers();
	// 			}
	// 	    }
	// 	  );
	// }

	var ptLA = new GLatLng(34.0522342, -118.2436849);
	var ptNY = new GLatLng(40.7142691, -74.0059729);
	var ptSF = new GLatLng(37.7749295, -122.4194155);

	var mapping = {};
	mapping['LarryDavid'] = ptLA;
	mapping['CherylDavid'] = ptLA;
	mapping['JeffGreene'] = ptNY;
	mapping['RichardLewis'] = ptNY;
	mapping['TedDanson'] = ptSF;
	mapping['MaryDanson'] = ptLA;
	mapping['SusieGreene'] = ptNY;
	
	Locator.mapController.set('locationContactMap', mapping);
	
	
	
} ;

function main() { Locator.main(); }
