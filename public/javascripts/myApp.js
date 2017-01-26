define(['underscore', 'handlebars', 'jquery', 'backbone', 'Router'], function (_, handlebars, $, Backbone, Router) {

    var Book = Backbone.Model.extend({
        urlRoot: 'http://localhost:2000/books/',
        initialize: function () {
            console.log('a new book');
        },
        defaults: {
            name: 'Book Title',
            author: 'No One'
        },
    });


    var book = new Book();
    console.log(book);
    book.save(book.attributes, {
        success: function (model, response, options) {
            console.log('Model saved');
            console.log('Id: ' + book.get('id'));
        },
        error: function (model, xhr, options) {
            console.log('Failed to save model');
        }
    });


    var NavBar = Backbone.View.extend({

        tagName: "div",
        id: "nav-bar",

        initialize: function () {
            console.log('creating view NavBar');
            //handlebars.registerPartial("navBar", "/templates/navBar");
            $("#nav-bar-container").html(this.el);
            this.render();
        },
        //This is a collection of possible routes and their accompanying
        //user-friendly titles
        events: {
            'click #home': function () {
                console.log('adding css to home');
                $("#users").removeClass('active');
            },

            'click #users': function () {
                console.log('adding css to home');
                $("#users").addClass('active');
            }
        },

        render: function () {
            var source = $("#nav-template").html();
            var template = handlebars.compile(source);
            this.$el.html(template);
        }

    });


    var router = new Router();
    new NavBar();
    Backbone.history.start();
});