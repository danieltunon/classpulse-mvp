var express = require('express');

var app = express();
var server = require('http').Server(app)
var io = require ('socket.io')(server);
var socketHelpers = require('./socket.js');

var port = process.env.PORT || 5959;

// Middleware: serves static files
require('./middleware.js')(app, express);
require('./routes.js')(app, express);

io.on('connection', function(socket) {
  socket.on('clienttest', function() {
    console.log('heard test');
    io.emit('servertest', {
      question: 'Is this a real question?',
      answers: [
        'no',
        'yes',
        'i don\'t understand the question',
        'because I\'m an idiot'
      ],
      response: ''
    });
  });
});


server.listen(port, () => console.log('Listening for connections on:', port));
