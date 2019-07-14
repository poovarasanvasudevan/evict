exports.up = function (knex) {
    return knex.schema.table('users', function (table) {
        table.integer('tendent')
            .notNullable()
            .references('id')
            .inTable('tendent')
            .onDelete('cascade');
    })
};

exports.down = function (knex) {
    return knex.schema.table('users', function (table) {
        table.dropColumn('tendent')
    })
};
