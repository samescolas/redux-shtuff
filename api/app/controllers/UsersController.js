var express = require('express');
var router = express.Router();

router.use(express.json());

var User = require('../models/user');

router.post('/', function(req, res) {
	var user = new User();
	user.createdAt = new Date();
	user.updatedAt = new Date();
	user = Object.assign(user, req.body.user);

	user.save(function(err) {
		if (err)
			res.send(err);

		res.json(user.toJSON());
	});
});

router.get('/', function(req, res) {
	User.find(function(err, users) {
		if (err)
			res.send(err);
		
		res.json(users);
	});
});

router.get('/:user_id', function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err)
			res.send(err);

		res.json(user);
	});
});

router.put('/:user_id', function(req, res) {
	User.findById(req.params.user_id, function(err, user) {
		if (err)
			res.send(err);

		user = Object.assign({}, req.body.user);

		user.save(function(err) {
			if(err)
				res.send(err);

			res.json({ message: 'User updated!' });
		});
	});
});
	
router.delete('/:user_id', function(req, res) {
	User.remove({
		_id: req.params.user_id
	}, function(err, user) {
		if (err)
			res.send(err);

		res.json({ message: 'User deleted!' });
	});
});

module.exports = router;
