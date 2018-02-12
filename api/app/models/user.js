// app/models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Mixed = Schema.Types.Mixed;

const UserSchema = new Schema({
  f_name:		{ type: String },
  l_name:		{ type: String },
  email:		{ type: String, required: true, index: { unique: true } },
  password: 	{ type: String, required: true },
  address:		{ type: String },
  zip:			{ type: Number },
  phone:		{ type: Number },
  updatedAt:    { type: Date, default: Date.now },
  createdAt:    { type: Date, default: Date.now }
},  {
  toObject:     { virtuals: true },
  toJSON:       { virtuals: true }
});

module.exports = mongoose.model('User', UserSchema);
