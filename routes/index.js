var express = require('express');
var router = express.Router();
var handlebars = require('hbs');
var fs = require('fs');

handlebars.registerPartial('userMessage', fs.readFileSync('public/templates/userMessage.hbs', 'utf8'));

var context = {
    title: 'Express',
    author: {firstName: "Alan", lastName: "Johnson"},
    content: "I Love Handlebars",
    comments: [{
        author: {firstName: "Yehuda", lastName: "Katz"},
        content: "Me too!"
    }, {
        author: {firstName: "Jason", lastName: "Henry"},
        content: "You too!"
    }]
};

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('rending index in server side');
    res.render('index', context);
});



var books = [
    {id: 98, author: 'Stephen King', title: 'The Shining', year: 1977},
    {id: 99, author: 'George Orwell', title: 1949}];

router.get('/books', function (request, response) {
    response.header('Access-Control-Allow-Origin', '*');
    console.log('In GET function ');
    response.json(books);

});


module.exports = router;
