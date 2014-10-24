var mongoose  = require('mongoose'),
    bodyParser= require('body-parser'),
    express   = require('express');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8000);


console.log('Server Running on Port %d', app.get('port'));
