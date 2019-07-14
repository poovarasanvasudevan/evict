

exports.up = function(knex) {

    return knex.schema.table('database_apps', function (table) {
        table.integer('parent' )
            .nullable()
            .references('id')
            .inTable('database_apps')
            .onDelete('cascade');
    });
};

exports.down = function(knex) {
    return knex.schema.table('database_apps', function (table) {
        table.dropColumn('parent');
    });
};
