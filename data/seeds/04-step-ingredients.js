exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('step_ingredients').del()
  await knex('step_ingredients').insert([
    {ingredient_id: 1, step_id: 1, quantity: 5},
    {ingredient_id: 2, step_id: 1, quantity: 6},
    {ingredient_id: 3, step_id: 1, quantity: 7},
    {ingredient_id: 1, step_id: 4, quantity: 8},
    {ingredient_id: 3, step_id: 2, quantity: 9},
    {ingredient_id: 2, step_id: 3, quantity: 1}
  ]);
};
