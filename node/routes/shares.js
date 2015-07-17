/* Router for /stocks requests */

var express = require('express');
var router = express.Router();

router.get('/tickerhere', function(req, res, next) {
  res.send('respond with a resource 1');
});

module.exports = router;
