/**
 * A wrapper around the information about each country
 */
window.Country = Backbone.Model.extend({

    getRssUrl: function(){
        return "http://globalvoicesonline.org"+this.get('url')+"feed";
    },

    getGoogleFeedUrl: function(){
        return 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=30&q='+
                encodeURIComponent(this.getRssUrl());
    }

});

/**
 * A collection of Country model objects.
 */
window.CountryCollection = Backbone.Collection.extend({

    model: Country

});
