var path = require('path');

var express = require('express');

var port = 12000;
var app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.listen(port);
console.info('App backend listening on port ' + port);
