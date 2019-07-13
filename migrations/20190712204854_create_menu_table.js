
exports.up = function(knex) {

    return knex.schema.createTable('database_apps' , function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').defaultTo(knex.fn.now());
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.string('title' , 255);
        t.text('description').nullable();
        t.string('icon' , 255).nullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('database_apps')
};
