// ==========================================================================
// Project:   Locator - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Locator */

// This page describes the main user interface for your application.  
sc_require('frameworks/scui/frameworks/foundation/controllers');

Locator.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'mapContainer sideView selectedContact'.w(),
    
	selectedContact: SC.LabelView.design({
        layout: { top: 5, left: 320, right: 20, height: 50 },
		anchorLocation: SC.ANCHOR_RIGHT,
		valueBinding: 'Locator.contactController.summary',
		escapeHTML: NO,
		isVisibleBinding: SC.Binding.bool('Locator.contactController.content')
    }),

	mapContainer: SC.ContainerView.design({
		layout: { top: 60, left: 320, right: 20 },
		backgroundColor: 'white',

		contentView: SC.ListView.design({
		})
	}),

	sideView: SC.View.design({
		childViews: 'contactView searchText searchButton'.w(),
		anchorLocation: SC.ANCHOR_TOP,
		
		searchText: SC.TextFieldView.design({
			layout: { top: 5, left: 5, width: 210, height: 25 },
			valueBinding: 'Locator.contactSearchController.searchTerm'
		}),

		searchButton: SC.ButtonView.design({
			layout: { top: 5, left: 220, width: 80 },
			title: 'Search'
		}),
		
		contactView: SC.ScrollView.design({
			hasHorizontalScroller: NO,
			layout: { top: 35, left: 5, width: 290 },
			backgroundColor: 'white',

			contentView: SC.ListView.design({
				contentBinding: 'Locator.contactSearchController.results',
				selectionBinding: 'Locator.contactSearchController.selection',
				// contentValueKey: 'firstName',
				
				exampleView: SC.View.design(SC.Control, {
					render: function(context, firstTime) {
						var content = this.get('content');
						var firstName = content.get('firstName');
						var lastName = content.get('lastName');
						var fullName = firstName + ' ' + lastName;
						context.push(fullName);
					}
				})
			})
		})		
	})

  })

});
