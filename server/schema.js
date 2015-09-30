var Bookshelf = require('bookshelf');

var db = Bookshelf.initialize({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'PetWatch',
    charset: 'utf8',
  }
});

db.knex.schema.hasTable('Owners').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Owners', function (table) {
      table.increments('id').primary();
      table.string('firstname', 20);
      table.string('lastname', 20);
      table.string('address', 100);
      table.string('phone', 20);
      table.string('email', 50);
      table.integer('sittersID').unsigned().references('Sitters.id');
    }).then(function (table) {
      console.log('Created Owners table!', table);
    }).catch(function(err) {
      console.error('Error creating Owners table');
    });
  }
});

db.knex.schema.hasTable('Pets').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Pets', function (table) {
      table.increments('id').primary();
      table.integer('ownersID').unsigned().references('Owners.id');
      table.string('species', 50);
      table.string('name', 50);
      table.integer('age').unsigned();
      table.string('size', 20);
      table.string('description', 255);
      table.string('picURL', 150);
      table.timestamps();
    }).then(function (table) {
      console.log('Created Pets table!', table);
    }).catch(function(err) {
      console.log('Error creating Pets table');
    });
  }
});

db.knex.schema.hasTable('Sitters').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Sitters', function (table) {
      table.increments('id').primary();
      table.string('firstname', 20);
      table.string('lastname', 20);
      table.string('address', 100);
      table.string('phone', 20);
      table.string('email', 50);
      table.string('picURL', 150);
      table.string('description', 255);
      table.integer('ownersID').unsigned().references('Owners.id');
    }).then(function (table) {
      console.log('Created Sitters table!', table);
    }).catch(function(err) {
      console.error('Error creating Sitters table');
    });
  }
});

module.exports = db;