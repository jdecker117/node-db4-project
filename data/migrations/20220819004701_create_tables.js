exports.up = function(knex) {
  return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.varchar('recipe_name').notNullable().unique()
            tbl.varchar('created_at').notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id');
            tbl.varchar('ingredient_name').notNullable()
        })
        .createTable('steps', tbl => {
            tbl.increments('step_id');
            tbl.integer('step_number').notNullable();
            tbl.varchar('step_instructions').notNullable();
            tbl.integer('recipe_id').notNullable()
            .references('recipe_id')
            .inTable('recipes')
        })
        .createTable('step_ingredients', tbl => {
            tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            tbl.integer('quantity')
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')

};
