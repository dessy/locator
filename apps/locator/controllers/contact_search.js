// ==========================================================================
// Project:   Locator.contactSearchController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Locator SCUI*/

/** @class

  (Document Your Controller Here)

  @extends SCUI.SearchableArrayController
*/

Locator.contactSearchController = SCUI.SearchableArrayController.create(
/** @scope Locator.contactSearchController.prototype */ {
	searchTerm: '',
	
	results: function() {
		var query = SC.Query.local(Locator.Contact, { conditions: "location CONTAINS '" + this.get('searchTerm') + "'", orderBy: 'lastName' });
		var allContacts = Locator.store.find(query);
		
		return allContacts;
	}.property('searchTerm').cacheable()

}) ;
