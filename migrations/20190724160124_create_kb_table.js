exports.up = function (knex) {
    return knex.schema.createTable("knowledge_base", function (table) {
        table.increments("id").unsigned().primary();
        table.string("article_id").notNullable();
        table.string("article_title", 800);
        table.text("description");
        table.uuid("ref").defaultTo(knex.raw("uuid_generate_v4()"));
        table.integer("version");

        table.string("status", 300);
        table.boolean("active").defaultTo(true);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("knowledge_base");
};
