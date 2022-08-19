const db = require('../../data/db-config')

async function getRecipeById(recipe_id){
    const result = await db('recipes')
    .leftJoin('steps as st', 'recipes.recipe_id', 'st.recipe_id')
    .where('recipes.recipe_id', recipe_id)
    .leftJoin('step_ingredients as si', 'si.step_id', 'st.step_id')
    .join('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
    return result 
}

module.exports = {getRecipeById}