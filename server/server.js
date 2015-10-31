var express = require('express');
var authentication = require('./authentication')

var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/sign_in', authentication.signIn);

app.get('/sign_up', authentication.signUp);

var server = app.listen( (process.env.PORT || 3000), function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});