var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
// Create the Express application:
var app = express();
var jsonParser = bodyParser.json() 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Attach middleware:


// Import the pokemonRouter and assign it to the correct route:


app.get('/', function (req, res) {
	
});

module.exports = app;
