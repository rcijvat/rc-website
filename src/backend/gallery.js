/**
 * Created by rcijvat on 12/10/16.
 */

function register(app) {
  app.get('/gallery/album', function(req, res) {
    res.send([1,2,3]);
  });
}

module.exports = {
  register: register
};
