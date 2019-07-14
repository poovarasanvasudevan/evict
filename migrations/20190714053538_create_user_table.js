exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').unsigned().primary()
        table.string('email').unique().notNullable()
        table.string('username').unique().notNullable()
        table.string('password', 999).notNullable()
        table.string('first_name').nullable()
        table.string('last_name').nullable()
        table.string('avatar').nullable()

        table.boolean('is_active').defaultTo(true)
        table.boolean('is_account_verified').defaultTo(false)
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
