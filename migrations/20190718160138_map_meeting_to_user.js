exports.up = function (knex) {
    return knex.schema.createTable('participants', function (table) {
        table.increments('id').unsigned().primary();
        table.string('email').unique();
        table.integer('user_id')
            .nullable()
            .references('id')
            .inTable('users')
            .onDelete('cascade');

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('participants');
};
