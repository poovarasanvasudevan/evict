exports.up = function (knex) {
    return knex.schema.createTable('schema_tables', function (table) {
        table.increments('id').unsigned().primary();
        table
            .integer('tendent')
            .references('id')
            .inTable('tendent')
            .onDelete('cascade');

        table.uuid('ref_key')
            .defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('table_name').unique();

        table.unique(['tendent', 'table_name']);
        table.text('description').nullable();

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('schema_tables');
};
