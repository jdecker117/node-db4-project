exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {recipe_name: 'spaghetti', created_at: '1234'},
    {recipe_name: 'soup', created_at: '12345'},
    {recipe_name: 'casserole', created_at: '123456'}
  ]);
};
