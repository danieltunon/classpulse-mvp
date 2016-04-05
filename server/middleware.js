// may add some modules later: eg. body-parser
var bodyParser = require('body-parser');

module.exports = function middleware(app, express) {

  app.use(express.static(__dirname + '/../client/'));

  app.use(bodyParser.json());
  
  app.post('/api/users/verify', function(req, res) {
    res.status(200);
    if ( req.body.username === 'catappleboxface' ) {
      res.send('teacher');
    } else {
      res.send('student');
    }
  });

};
