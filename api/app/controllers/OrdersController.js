var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(express.json());

var Order = require('../models/order');

router.post('/', function(req, res) {
	var order = new Order();
	order.createdAt = new Date();
	order.updatedAt = new Date();
	order = Object.assign(order, req.body.order);

	order.save(function(err) {
		if (err)
			res.send(err);

		res.json(order.toJSON());
	});
});

router.get('/', function(req, res) {
	Order.find(function(err, orders) {
		if (err)
			res.send(err);
		
		res.json(orders);
	});
});

router.get('/:order_id', function(req, res) {
	Order.findById(req.params.order_id, function(err, order) {
		if (err)
			res.send(err);

		res.json(order);
	});
});

router.put('/:order_id', function(req, res) {
	Order.findById(req.params.order_id, function(err, order) {
		if (err)
			res.send(err);

		order = Object.assign({}, req.body.order);

		order.save(function(err) {
			if(err)
				res.send(err);

			res.json({ message: 'Order updated!' });
		});
	});
});
	
router.delete('/:order_id', function(req, res) {
	Order.remove({
		_id: req.params.order_id
	}, function(err, order) {
		if (err)
			res.send(err);

		res.json({ message: 'Order deleted!' });
	});
});

module.exports = router;
