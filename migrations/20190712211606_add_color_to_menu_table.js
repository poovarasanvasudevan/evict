
exports.up = function(knex) {

    return knex.schema.table('database_apps', function (table) {
        table.string('color' , 30);
    });
};

exports.down = function(knex) {
    return knex.schema.table('database_apps', function (table) {
        table.dropColumn('color');
    });
};
