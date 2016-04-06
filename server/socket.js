module.exports = function socketConfig(io) {

  io.on('connection', function(socket) {

    socket.on('studentResponse', function(response) {
      io.emit('newStudentResponse', response);
    });

    socket.on('quiz', function(quiz) {
      io.emit('newQuiz', quiz);
    });

    socket.on('resetQ', function() {
      io.emit('resetQ');
    });

    socket.on('closed', function() {
      io.emit('closed');
    });

    socket.on('reopen', function() {
      io.emit('reopen');
    });

  });
};
