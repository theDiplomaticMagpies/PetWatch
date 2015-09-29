var db = require('../schema.js');
var Owner = require('./Owner.js');

var Sitter = db.Model.extend({
  tableName: 'Sitters',
  hasTimestamps: false,
  sitter: function() {
    return this.hasMany(Owner);
  }
});

module.exports = Sitter;