var express = require('express');
var router = express.Router();
var menu = require '../resources/menu.json';

router.use(express.json());

router.get('/', function(req, res) {
	res.json(menu);
});

module.exports = router;
