const baseURL = import.meta.env.VITE_SERVER_URL;


 let categoryRecipes = [];

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: 'servicesError', message: data };
    }
  }

export const getRecipes = async () => {
  const response = await fetch(`${baseURL}recipes/`);
  const data = await convertToJson(response);
  console.log("get recipes function log: " + data);
  return data;
}

// function to get a list of recipes with a specific category
export const getRecipesByCategory = async (category, text) => {
  const response = await fetch(`${baseURL}recipes/`);
  const data = await convertToJson(response);
  console.log("category: ", category);
  data.forEach(recipe => {
    if (category === 'cat'){
      if (recipe.categories.includes(text)){
        categoryRecipes.push(recipe);
      }
      else if (category === 'ing'){
        recipe.ingredients.forEach(ingredient => {
          let ingName = getIngredientsById(ingredient._id);
          console.log("ingredient id: " + ingredient._id);
          if (ingName === text){
            categoryRecipes.push(recipe);
          }
        });
      }
      else if (category === 'name'){
        if (recipe.name === text){
          categoryRecipes.push(recipe);
        }
      }
    }
    });
  return categoryRecipes;
}

export const getIngredientsById = async (id) => {
  const response = await fetch(`${baseURL}ingredients/${id}`);
  const data = await convertToJson(response);
  console.log("get ingredients by id function log: " + data);
  let ingredient = data.name;
  return ingredient;
}