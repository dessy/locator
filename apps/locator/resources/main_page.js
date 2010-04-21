// ==========================================================================
// Project:   Locator - mainPage
// ==========================================================================
/*globals Locator */

Locator.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    childViews: 'mapView sideView selectedContactName selectedContactLocation'.w(),
    
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

	mapView: SC.View.design({
		layout: { top: 60, bottom: 5, left: 320, right: 20 },
		backgroundColor: 'white',
		valueBinding: 'Locator.mapController.mapHTML',
		escapeHTML: NO, 
		
		render: function(context, firstTime) {
			context.push('<div id="map_canvas" style="width: 100%; height: 100%; z-index: 1;"></div>');
		}
	}),

	sideView: SC.View.design({
		childViews: 'contactView searchContainer searchBy'.w(),
		anchorLocation: SC.ANCHOR_TOP,
		
		searchContainer: SC.ContainerView.design({
			layout: { top: 5, left: 5, width: 180, height: 25 },
			nowShowingBinding: 'Locator.contactSearchController.searchContainerValue'
		}),
		
		searchBy: SC.SelectFieldView.design({
			layout: { top: 5, left: 190, width: 110, height: 25 },
			nameKey: 'name',
			valueKey: 'value',
			disableSort: YES,
			objects: Locator.contactSearchController.getSearchConditions(),
			fieldValueBinding: 'Locator.contactSearchController.searchCondition'
		}),
		
		contactView: SC.ScrollView.design({
			hasHorizontalScroller: NO,
			layout: { top: 35, bottom: 5, left: 5, width: 290 },
			backgroundColor: 'white',

			contentView: SC.ListView.design({
				contentBinding: 'Locator.contactSearchController.results',
				selectionBinding: 'Locator.contactSearchController.selection',
				
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

  }),

  searchPane: SC.Pane.design({
    childViews: 'searchText searchRadio'.w(),

	searchText: SC.TextFieldView.design({
		valueBinding: 'Locator.contactSearchController.searchTerm'
	}),
	
	searchRadio: SC.RadioView.design({
	    items: [{ title: "True", 
	              value: "true" },
	            { title: "False", 
	              value: "false" }],
	    itemTitleKey: 'title',
	    itemValueKey: 'value',
		valueBinding: 'Locator.contactSearchController.searchTerm',
	    layoutDirection: SC.LAYOUT_HORIZONTAL
	})

  })

});
