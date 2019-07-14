exports.up = function (knex) {

    return knex.schema.createTable('tendent', function (table) {
        table.increments('id').unsigned().primary()
        table.string('tendent_code').unique().notNullable()
        table.string('tendent_name').notNullable()
        table.string('tendent_logo', 999).nullable()
        table.text('tendent_description').nullable()
        table.string('uri_prefix').notNullable()


        table.boolean('is_active').defaultTo(true)
        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tendent')
};
