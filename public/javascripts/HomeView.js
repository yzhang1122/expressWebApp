define(['jquery', 'backbone'], function ($, Backbone) {
    var HomeView = Backbone.View.extend({

        tagName: "div",
        id: "home-view",

        initialize: function () {
            $("#container").html(this.el);
            this.render();
        },

        events: {
            "click #check": "checkIn"
        },

        checkIn: function () {
            console.log('clicking the checkIn')
        },

        render: function () {
            this.$el.html("<h1>This is the home page</h1><button id='check'>click me</button><a href='#users'>Go to users</a>");
        }
    });

    return HomeView;
});