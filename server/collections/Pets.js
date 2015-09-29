var db = require('../schema.js');
var Pet = require('../models/Pet.js');

var Pets = new db.Collection();

Pets.model = Pet;

module.exports = Pets;