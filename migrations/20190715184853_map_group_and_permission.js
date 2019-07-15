exports.up = function (knex) {
    return knex.schema.table('permission', function (table) {
        table.integer('group_id')
            .references('id')
            .inTable('groups')
            .onDelete('cascade');
    });
};

exports.down = function (knex) {
    return knex.schema.table('permission', function (table) {
        return table.dropColumn('permission');
    });
};
