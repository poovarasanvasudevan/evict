
exports.up = function(knex) {
    return knex.schema.table('users', function (table) {
        table.jsonb('user_option')
            .nullable()
    })
};

exports.down = function(knex) {
    return knex.schema.table('users', function (table) {
        table.dropColumn('user_option')
    });
};
