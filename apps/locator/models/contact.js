// ==========================================================================
// Project:   Locator.Contact
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Locator */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Locator.Contact = SC.Record.extend(
/** @scope Locator.Contact.prototype */ {
	
	firstName: SC.Record.attr(String),
	lastName: SC.Record.attr(String),
	location: SC.Record.attr(String),
	isRegistered: SC.Record.attr(Boolean)
	
}) ;
