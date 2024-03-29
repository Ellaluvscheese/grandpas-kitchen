const baseURL = import.meta.env.VITE_SERVER_URL;
import { auth0Client } from "./stores.js";
import { get } from "svelte/store";


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
  // const response = await fetch(`${baseURL}ingredients/${id}`);
  // const data = await convertToJson(response);
  const data = await publicRoute(`ingredients/${id}`);
  console.log("get ingredients by id function log: " + data);
  let ingredient = data.name;
  return ingredient;
}

// get user profile
export const getUserProfile = async (user_id) => {
  const response = await privateRoute("profile");
  console.log("get user profile function log: " + response);
  return response;
}

    //example of sending a request to the API using the token from Auth0
    async function privateRoute(url, method = "GET") {
      const token = await get(auth0Client).getTokenSilently();
      const options = {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const res = await fetch(baseURL + url, options);
      const data = await convertToJson(res);
      console.log(data);
      return data;
    }
  
    //exmaple of making a request to a public API route.
    async function publicRoute(url) {
      const res = await fetch(baseURL + url);
      const data = await convertToJson(res);
      console.log(data);
      return data;
    }