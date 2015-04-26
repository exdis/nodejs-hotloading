import express from 'express';
var app = express();

import Response from './response.js';
var response = new Response();

app.get('/', function(req, res) {
    res.send(response.getResponse());
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://' + host + ':' + port);
});
