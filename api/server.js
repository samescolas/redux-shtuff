var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

var Order = require('./app/models/order');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
	console.log('Something...');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hello, world!!!' });
});

router.route('/orders')

	.post(function(req, res) {
		var order = new Order();
		order.name = req.body.name || 'Dmitri';

		order.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Order created!' });
		});
	})

	.get(function(req, res) {
		Order.find(function(err, orders) {
			if (err)
				res.send(err);
			
			res.json(orders);
		});
	});

router.route('/orders/:order_id')

	.get(function(req, res) {
		Order.findById(req.params.order_id, function(err, order) {
			if (err)
				res.send(err);

			res.json(order);
		});
	})

	.put(function(req, res) {
		Order.findById(req.params.order_id, function(err, order) {
			if (err)
				res.send(err);

			order.name = req.body.name || 'No name';

			order.save(function(err) {
				if(err)
					res.send(err);

				res.json({ message: 'Order updated!' });
			});
		});
	})
	
	.delete(function(req, res) {
		Order.remove({
			_id: req.params.order_id
		}, function(err, order) {
			if (err)
				res.send(err);

			res.json({ message: 'Order deleted!' });
		});
	});

app.use('/api', router);

app.listen(port);
console.log("Listening on ", port, "...");
