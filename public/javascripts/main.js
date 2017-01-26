require.config({
    baseUrl: 'static/',
    shim: {
        underscore: {
            exports: '_'
        },
    },
    paths: {
        jquery: '/scripts/jquery/dist/jquery.min',
        underscore: '/scripts/backbone/node_modules/underscore/underscore-min',
        backbone: '/scripts/backbone/backbone-min',
        HomeView: '/javascripts/HomeView',
        UsersView: '/javascripts/UsersView',
        Router: '/javascripts/Router',
        bootstrap: '/scripts/bootstrap/dist/js/bootstrap',
        handlebars: '/scripts/handlebars/dist/handlebars'
    }
});

require(['/javascripts/myApp.js'], function (myApp) {
    console.log('after loading all modules and start the app');
});