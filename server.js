var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  hostname = process.env.HOSTNAME || 'localhost',
  port = process.env.PORT || 3000,
  publicDir = path.join(__dirname, '/public');

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

var server = app.listen(port, function () {

  var port = server.address().port;
  console.log('Example app listening on port', port);
});