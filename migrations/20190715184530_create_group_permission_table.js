exports.up = function (knex) {
    return knex.schema.createTable('permission', function (table) {
        table.increments('id').unsigned().primary();
        table.string('permission_id').unique().notNullable();
        table.text('permission_description');
        table.boolean('is_active').defaultTo(true);

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('permission');
};
