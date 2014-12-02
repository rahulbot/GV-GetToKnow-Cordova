/**
 * Shows a list of all the countries.
 */
window.CountryListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    /**
     * Creates a UL element and populates it with all the countries
     */
    render: function () {
        var countries = this.model;
        console.log("  CountryListView: render ("+countries.length+" countries)");
        this.$el.html('<ul id="country-list" data-role="listview" class="ui-listview"></ul>');

        for(i=0;i<countries.length;i++){
            this.$('#country-list').append(
                new CountryListItemView({model: countries[i]}).render().el
            );
        }

        return this;
    }
});

/**
 * Shows one country item in the list of all of them
 */
window.CountryListItemView = Backbone.View.extend({

    tagName: "li",

    className: "ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-c",

    initialize: function () {
    },

    /**
     * Grab the template from index.html, and render it by filling in the data for this specific country
     */
    render: function () {
        this.$el.html( _.template($('#country-list-item-template').html(),{
            id: this.model.get("id"), 
            name: this.model.get("name")
        }) );
        return this;
    }

});