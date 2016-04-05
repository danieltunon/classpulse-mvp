module.exports = function socketConfig(io) {

  io.on('connection', function(socket) {

    socket.on('studentResponse', function(response) {
      io.emit('studentResponse', response);
    });

    socket.on('newQuiz', function(quiz) {
      io.emit('newQuiz', quiz);
    });

  });
};
