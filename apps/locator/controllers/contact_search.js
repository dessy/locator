// ==========================================================================
// Project:   Locator.contactSearchController
// ==========================================================================
/*globals Locator SCUI*/

/** @class

  (Document Your Controller Here)

  @extends SCUI.SearchableArrayController
*/

Locator.contactSearchController = SCUI.SearchableArrayController.create(
{

	searchTerm: '',
	
	results: function() {
		var query = SC.Query.local(Locator.Contact, { conditions: "location CONTAINS '" + this.get('searchTerm') + "'", orderBy: 'lastName' });
		var allContacts = Locator.store.find(query);
		
		return allContacts;
	}.property('searchTerm').cacheable()

}) ;
