var express = require('express');
var app = express();

var hostswap = require('hotswap');

var response = require('./response.js');

hostswap.on('swap', function() {
    console.log('Swap modules');
});

app.get('/', function(req, res) {
    res.send(response());
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://' + host + ':' + port);
});
