exports.up = function (knex) {
    return knex.schema.createTable('user_groups', function (table) {
        table.increments('id').primary().unsigned();
        table.integer('user_id').references('users.id');
        table.integer('group_id').references('groups.id');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user_groups');
};
