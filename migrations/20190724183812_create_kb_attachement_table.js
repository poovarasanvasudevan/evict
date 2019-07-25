exports.up = function (knex) {
    return knex.schema.createTable('knowledge_base_attachements', function (table) {
        table.increments('id').unique().primary()
        table.uuid('attachement_id').defaultTo(knex.raw("uuid_generate_v4()"))
        table.string('file_name')
        table.bigInteger('file_size')
        table.string('mime_type')

        table.integer('knowledge_base_id')
            .references('id')
            .inTable('knowledge_base')
            .onDelete('cascade')


        table.timestamps(true, true)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('knowledge_base_attachements')
};
