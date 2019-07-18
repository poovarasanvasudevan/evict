exports.up = function (knex) {
    return knex.schema.createTable('meetings', function (table) {
        table.increments('id').unsigned().primary();
        table.text('meeting_id').unique();
        table.string('title', 600);
        table.text('description').nullable();

        table.integer('owner')
            .references('id')
            .inTable('users')
            .onDelete('cascade');

        table.boolean('is_recurring').defaultTo(false);
        table.timestamp('start_time').nullable();

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('meetings');
};
