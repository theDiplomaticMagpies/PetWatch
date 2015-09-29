var db = require('../schema.js');
var Sitter = require('../models/Sitter.js');

var Sitters = new db.Collection();

Sitters.model = Sitter;

module.exports = Sitters;