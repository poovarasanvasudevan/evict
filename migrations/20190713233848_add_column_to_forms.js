
exports.up = function(knex) {
    return knex.schema.table('database_apps', function (table) {
        table.increments('id').unsigned().primary()
    })
};

exports.down = function(knex) {
  
};
