exports.up = function (knex) {
    return knex.schema.createTable('meeting_participants', function (table) {
        table.increments('id').unsigned().primary();
        table
            .integer('user_id')
            .references('users.id');

        table.integer('meeting_id')
            .references('meetings.id');

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('meeting_participants')
};
