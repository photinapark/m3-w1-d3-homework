var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('content');
});

app.listen(3000);