var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/nearby', function(req, res, next) {
  res.json([{"tags": ["code"], "location": "SimpleWeb", "user": "Ben"}, {"tags": ["eat"], "location": "SimpleWeb"}, "user": "Simon"]);
});

module.exports = router;
