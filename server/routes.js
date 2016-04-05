module.exports = function routes(app, express) {
  app.post('/api/users/sigin', function(req, res, next) {
    var username = req.body.username;

    res.status(201).send('awesome');
  })
}
