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
  console.log("get recipes function log: " + data);
  return data;
}

// function to get a list of recipes with a specific category
export const getRecipesByCategory = async (category) => {
  const response = await fetch(`${baseURL}recipes/`);
  const data = await convertToJson(response);
  console.log("data & category: ", data , category);
  return data;
}