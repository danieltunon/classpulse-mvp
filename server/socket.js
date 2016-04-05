module.exports = function socketConfig(io) {

  io.on('connection', function(socket) {

    socket.on('studentResponse', function(response) {
      io.emit('newStudentResponse', response);
    });

    socket.on('quiz', function(quiz) {
      console.log('server got new quiz');
      console.log(quiz);
      io.emit('newQuiz', quiz);
    });

  });
};
