var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

var port = process.env.PORT || 8080;

var router = express.Router();
var OrdersController = require('./app/controllers/OrdersController');
var UsersController = require('./app/controllers/UsersController');
var MenuController = require('./app/controllers/MenuController');

app.use(express.json());

router.get('/', function(req, res) {
	res.json({ message: 'hello, world!!!' });
});

router.use('/orders', OrdersController);
router.use('/users', UsersController);
router.use('/menu', MenuController);

app.use('/api', router);

app.listen(port);
console.log("Listening on ", port, "...");
