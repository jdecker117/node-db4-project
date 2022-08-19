exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del()
  await knex('steps').insert([
    {step_instructions: 'mix', step_number: 1, recipe_id: 2},
    {step_instructions: 'bake', step_number: 2, recipe_id: 3},
    {step_instructions: 'stir', step_number: 2, recipe_id: 2},
    {step_instructions: 'boil', step_number: 1, recipe_id: 1},
    {step_instructions: 'combine', step_number: 1, recipe_id: 3}

  ]);
};
