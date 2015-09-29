var db = require('../schema.js');
var Owner = require('../models/Owner.js');

var Owners = new db.Collection();

Owners.model = Owner;

module.exports = Owners;