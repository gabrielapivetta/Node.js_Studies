
exports.up = function(knex) {
    return knex.schema.createTable('category', function (table) {
        table.increments('id').unsigned().primary();
        table.string('name').notNull();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('category');
};
