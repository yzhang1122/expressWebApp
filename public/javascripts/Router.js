define(['jquery', 'backbone', 'HomeView', 'UsersView'], function ($, Backbone, HomeView, UsersView) {
    var Router = Backbone.Router.extend({

        routes: {
            "": "setHome",
            "home": "home",
            "users": "users"
        },

        setHome: function () {
            console.log('setting the home view');
            window.location.href = "#home"
        },

        home: function () {
            console.log('rending the home view');

            this.loadView(new HomeView());
        },
        users: function () {
            console.log('rending the users view');
            this.loadView(new UsersView());
        },

        loadView: function (view) {
            this.view && (this.view.close ? this.view.close() : this.view.remove());
            this.view = view;
        }


    });

    return Router;
});


