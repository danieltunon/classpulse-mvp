var express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require ('socket.io')(server);

var port = process.env.PORT || 5959;

// Middleware: serves static files
require('./middleware.js')(app, express);
require('./routes.js')(app, express);

// Set up event listerners for client events
require('./socket.js')(io);


server.listen(port, () => console.log('Listening for connections on:', port));
