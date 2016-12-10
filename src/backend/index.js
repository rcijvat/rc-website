var path = require('path');

var express = require('express');

var gallery = require('./gallery');

var port = 12000;
var app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

gallery.register(app);

app.all('*', function(req, res) {
  req.url = '/index.html';
  app.handle(req, res);
});

app.listen(port);
console.info('App backend listening on port ' + port);
