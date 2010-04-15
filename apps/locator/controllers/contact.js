// ==========================================================================
// Project:   Locator.contactController
// ==========================================================================
/*globals Locator */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Locator.contactController = SC.ObjectController.create(
{

	contentBinding: 'Locator.contactSearchController.selection',
	
	contentBindingDefault: SC.Binding.single(),
		
	name: function() {
		var name = 'Name: ' + this.get('firstName') + ' ' + this.get('lastName');
		return name;
	}.property('content').cacheable(),
	
	located: function() {
		var location = "Location: " + this.get('location');
		return location;
	}.property('content').cacheable(),
		
	summary: function() {
		var info = 'Name: ' + this.get('firstName') + ' ' + this.get('lastName');
		info += "\nLocation: " + this.get('location');
		
		return info;
	}.property('content').cacheable()
	
}) ;
