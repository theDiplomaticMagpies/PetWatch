var db = require('../schema.js');
var Owner = require('./Owner.js');

var Pet = db.Model.extend({
  tableName: 'Pets',
  hasTimestamps: false,
  pet: function() {
    return this.belongsTo(Owner);
  }
});

module.exports = Pet;