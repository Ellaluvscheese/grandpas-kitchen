const baseURL = import.meta.env.VITE_SERVER_URL;

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
  console.log(data);
  return data;
}

// export const randomRecipe = async () => {
//   const recipes = await getRecipes()
//   if (recipes.length > 0) {
//     const randomIndex = Math.floor(Math.random() * recipes.length);
//     return recipes[randomIndex];
//   }
//   else {
//     console.log("No recipes available.");
//   }
// }