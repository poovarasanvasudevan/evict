
exports.up = function(knex) {
  return knex.schema.createTable('forms' , function (table) {

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms')
};
