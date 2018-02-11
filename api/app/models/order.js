// app/models/order.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	name: String
});

module.exports = mongoose.model('Order', OrderSchema);
