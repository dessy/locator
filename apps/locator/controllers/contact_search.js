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

	searchCondition: ['firstName', 'String'],

	searchTerm: '',
	
	searchContainerValue: function() {
		var containerValue = 'Locator.mainPage.searchPane.searchText';
		if (this.get('searchCondition') && this.get('searchCondition')[1] == 'Boolean') {
			containerValue = 'Locator.mainPage.searchPane.searchRadio';
		}
		
		return containerValue;
	}.property('searchCondition').cacheable(),
	
	results: function() {
		var type = 'String';
		var conditionString = "firstName CONTAINS '" + this.get('searchTerm') + "'";
		
		if (this.get('searchCondition')) {
			type = this.get('searchCondition')[1];
			
			if (type == 'String') {
				conditionString = this.get('searchCondition')[0] + " CONTAINS '" + this.get('searchTerm') + "'";
			} else if (type == 'Boolean') {
				conditionString = this.get('searchCondition')[0] + " = " + this.get('searchTerm');			
			}
		}
		
		var query = SC.Query.local(Locator.Contact, { conditions: conditionString, orderBy: 'lastName' });
		var contacts = Locator.store.find(query);
		
		return contacts;
	}.property('searchTerm').cacheable(),
	
	getSearchConditions: function() {
		var firstName = {};
		firstName['name'] = 'First Name';
		firstName['value'] = ['firstName', 'String'];

		var lastName = {};
		lastName['name'] = 'Last Name';
		lastName['value'] = ['lastName', 'String'];

		var location = {};
		location['name'] = 'Location';
		location['value'] = ['location', 'String'];
		
		var isRegistered = {};
		isRegistered['name'] = 'Is Registered';
		isRegistered['value'] = ['isRegistered', 'Boolean'];
		
		return [firstName, lastName, location, isRegistered];
	}
	
}) ;
