
exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
    table.text('description').notNull();
    table.decimal('price').notNull();
    table.integer('category_id');
    table.foreign('category_id').references('category');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
