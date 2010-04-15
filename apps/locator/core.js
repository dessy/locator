// ==========================================================================
// Project:   Locator
// ==========================================================================
/*globals Locator */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Locator = SC.Application.create(
{

  NAMESPACE: 'Locator',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures)

}) ;
