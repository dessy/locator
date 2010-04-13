// ==========================================================================
// Project:   Locator.contactController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Locator */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Locator.contactController = SC.ObjectController.create(
/** @scope Locator.contactController.prototype */ {
	contentBinding: 'Locator.contactSearchController.selection',
	
	contentBindingDefault: SC.Binding.single(),
	
	summary: function() {
		var info = 'Name: ' + this.get('firstName') + ' ' + this.get('lastName');
		info += "\nLocation: " + this.get('location');
		
		return info;
	}.property('content').cacheable()

}) ;
