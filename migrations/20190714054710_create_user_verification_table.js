//create extension if not exists "uuid-ossp";

exports.up = function (knex) {
    return knex.schema.createTable('user_verification', function (table) {
        table.increments('id').unsigned().primary()
        table.uuid('verification_key')
            .defaultTo(knex.raw('uuid_generate_v4()'))

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('cascade');

        table.dateTime('expiry')
            .notNullable()

        table.boolean('is_active').defaultTo(true)
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('user_verification')
};
