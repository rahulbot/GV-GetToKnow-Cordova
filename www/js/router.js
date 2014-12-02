/**
 * The router decides what to show based on the url being looked at.
 * Basically there is one route for each screen in the application.
 */
var AppRouter = Backbone.Router.extend({

    // a list of url, and what function to run for each
    routes: {
        ""                  : "list",
        "countries/:id"	    : "countryDetails",
    },

    initialize: function () {
    },

    /**
     * Shows a list of all the countries
     */
	list: function() {
        console.log("AppRouter: list");
        $("#content").html(new CountryListView({model:app.countryCollection.models}).el);
    },

    /**
     * Load a specific country and see the stories for it
     */
    countryDetails: function(id){
        console.log("AppRouter: Contry "+id+" Details");
        var country = app.countryCollection.get(id);
        $("#content").html(new CountryDetailView({model: country}).el);
    }

});
