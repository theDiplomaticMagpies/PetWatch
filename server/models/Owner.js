var db = require('../schema.js');
var Pet = require('./Pet.js');

var Owner = db.Model.extend({
  tableName: 'Owners',
  hasTimestamps: false,
  owner: function() {
    return this.hasMany(Pet);
  }
});

module.exports = Owner;