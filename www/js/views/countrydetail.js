/**
 * Shows the country information and list of recent stories
 */
window.CountryDetailView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    /**
     * This grabs the template from index.html and fills it in with the details for this
     * specific country.  Then it makes a request to google for a JSON version of the 
     * country's RSS feed of stories.  Once it gets the stories, it adds each one to the
     * screen using the story-template from the index.html file.
     */
    render: function () {
        var country = this.model;
        console.log("  CountryDetailView: render ("+country.get('name')+")");
        this.$el.html( _.template($('#country-detail-template').html(),{name: this.model.get("name")}) );
        var that = this;
        $.ajax({
            url: country.getGoogleFeedUrl(),
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                console.log("    CountryDetailView: complete "+textStatus);
            },
            success: function(data, textStatus, jqXHR) {
                console.log("    CountryDetailView: success "+textStatus);
                stories = _.first(data.responseData.feed.entries,20);
                console.log(stories[0]);
                for(i=0;i<stories.length;i++){
                    that.$('#story-list').append(
                        _.template($('#story-template').html(),stories[i])
                    );
                }
            }
        });
        return this;
    }

});
