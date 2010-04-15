// ==========================================================================
// Project:   Locator - mainPage
// ==========================================================================
/*globals Locator */

Locator.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'mapContainer sideView selectedContactName selectedContactLocation'.w(),
    
	selectedContactName: SC.LabelView.design({
        layout: { top: 5, left: 320, right: 20, height: 25 },
		anchorLocation: SC.ANCHOR_RIGHT,
		valueBinding: 'Locator.contactController.name',
		escapeHTML: NO,
		isVisibleBinding: SC.Binding.bool('Locator.contactController.content')
    }),

	selectedContactLocation: SC.LabelView.design({
        layout: { top: 30, left: 320, right: 20, height: 25 },
		anchorLocation: SC.ANCHOR_RIGHT,
		valueBinding: 'Locator.contactController.located',
		escapeHTML: NO,
		isVisibleBinding: SC.Binding.bool('Locator.contactController.content')
    }),

	mapContainer: SC.ContainerView.design({
		layout: { top: 60, bottom: 5, left: 320, right: 20 },
		backgroundColor: 'white',
		
		contentView: SC.View.design({
			valueBinding: 'Locator.mapController.mapHTML',
			
			render: function(context, firstTime) {
				// context.push('<body onload="initializeMap()" onunload="GUnload()"><div id="map_canvas" style="width: 500px; height: 300px"></div></body>');
				context.push('<div id="map_canvas" style="width: 100%; height: 100%"></div>');
			}
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
			layout: { top: 35, bottom: 5, left: 5, width: 290 },
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
