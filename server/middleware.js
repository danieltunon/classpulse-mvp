// may add some modules later: eg. body-parser

module.exports = function middleware(app, express) {
  app.use(express.static(__dirname + '/../client/'));
};
