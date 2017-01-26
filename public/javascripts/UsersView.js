define(['jquery', 'backbone'], function ($, Backbone) {
    var UserView = Backbone.View.extend({
        tagName: "li",
        initialize: function () {
            _.bindAll(this, "alertName");
            this.render();
        },
        events: {
            "click": "alertName"
        },
        render: function () {
            this.$el.html("Hi, my name is " + this.model.id);
        },
        alertName: function () {
            alert(this.model.id);
        }
    });

    var UsersView = Backbone.View.extend({
        tagName: "ul",
        id: "users-list",

        initialize: function () {
            $("#container").html(this.el);
            this.subViews = _.map(["Jules", "Vincent", "Marsellus"], function (user) {
                return new UserView({model: new Backbone.Model({id: user, name: user})});
            });
            this.render();
        },

        render: function () {
            _.each(this.subViews, function (view) {
                this.$el.append(view.el);
            }, this);
            this.$el.after("<a href='#home'>Go home</a>");
        },

        close: function () {
            _.each(this.subViews, function (view) {
                view.remove();
            });
            this.remove();
        }
    });

    return UsersView;
});