/* Router for /markets requests */

var express = require('express');
var router = express.Router();

router.get('/ftse100', function(req, res, next) {
  res.send('respond with a resource 1');
});

module.exports = router;
