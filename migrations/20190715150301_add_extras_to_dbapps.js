exports.up = function (knex) {
    return knex.schema.table('database_apps', function (table) {
        table.jsonb('extras')
            .nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table('database_apps', function (table) {
        table.dropColumn('extras');
    });
};
