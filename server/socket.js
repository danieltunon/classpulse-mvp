function initialize(socket) {
  socket.on('submit', function(answer) {
    io.emit('studentResponse', answer);
  });
  socket.on('postQuiz', function(quiz) {
    io.emit('newQuiz', quiz);
  });
}

function submitResponse() {

}

function submitQuiz() {

}

exports.initialize = initialize;
