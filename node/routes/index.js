var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res, next) {
  res.send('Express');
});




module.exports = router;
