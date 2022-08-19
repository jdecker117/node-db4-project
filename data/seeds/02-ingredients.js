exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {ingredient_name: 'tomatoes' },
    {ingredient_name: 'cabbage'},
    {ingredient_name: 'meat'}
  ]);
};
