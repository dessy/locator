// ==========================================================================
// Project:   Locator.Contact
// ==========================================================================
/*globals Locator */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Locator.Contact = SC.Record.extend(
{
	
	firstName: SC.Record.attr(String),
	lastName: SC.Record.attr(String),
	location: SC.Record.attr(String),
	isRegistered: SC.Record.attr(Boolean)
	
}) ;
