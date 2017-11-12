var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var _dir = __dirname;
    var dirname = _dir.replace('routes', 'public');
    res.sendFile(dirname + '/htmls/index.html');
});

module.exports = router;
