exports.up = function (knex) {
    return knex.schema.createTable('groups', function (table) {
        table.increments('id').unsigned().primary();
        table.string('group_name', 255).notNullable();
        table.text('group_description');

        table
            .integer('tendent')
            .references('id')
            .inTable('tendent')
            .onDelete('cascade');

        table.boolean('is_active').defaultTo(true);

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('groups');
};
