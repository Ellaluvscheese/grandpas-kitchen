const baseURL = import.meta.env.VITE_SERVER_URL;
import { auth0Client } from "./stores.js";
import { get } from "svelte/store";


async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: 'servicesError', message: data };
    }
  }

// (EG)
export const getRecipes = async () => {
  const response = await fetch(`${baseURL}recipes/`);
  const data = await convertToJson(response);
  // console.log("get recipes function log: " + data);
  return data;
}

// recipe of the week
// Function to fetch a random recipe from the API
export async function getRandomRecipe() {
  try {
    const response = await fetch(`${baseURL}recipes/`);
    const data = await convertToJson(response);
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  } catch (error) {
    console.error("Error fetching random recipe:", error);
    return null;
  }
}

// Function to display the recipe on the website
function displayRecipe(recipe) {
  // Assuming you have an HTML element with the ID "recipeOfWeek"
  const recipeNameElement = document.getElementById("recipeOfWeek");
  
  // Update the HTML elements with recipe details
  recipeNameElement.textContent = recipe.name;
}

// Function to change the recipe once a week
function changeRecipePeriodically() {
  // Fetch a random recipe
  getRandomRecipe().then(recipe => {
    // Display the fetched recipe
    displayRecipe(recipe);

    // Schedule the function to run again after one week
    setTimeout(changeRecipePeriodically, 7 * 24 * 60 * 60 * 1000); // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  });
}

// Call the function to start changing the recipe periodically
changeRecipePeriodically();


// function to get a list of recipes with a specific category
// (EG)
export const getRecipesByCategory = async (category, text) => {
  let categoryRecipes = [];
  text = text.toLowerCase();
  const data = await getRecipes();
  console.log("category: ", category);
  data.forEach(recipe => {
    if (category === 'cat'){
      recipe.categories.forEach(cat => {
        if (cat.toLowerCase() === text){
          categoryRecipes.push(recipe);
        }
      });
      // if (recipe.categories.includes(text)){
      //   categoryRecipes.push(recipe);
      // }
    }
    else if (category === 'ing'){
      console.log('Testing the if.... it is ing')
      recipe.ingredients.forEach(ingredient => {
        console.log(text, ingredient.name);
        if (ingredient.name.toLowerCase() === text){
          categoryRecipes.push(recipe);
        }
      });
    }
    else if (category === 'name'){
      if (recipe.name.toLowerCase() === text){
        categoryRecipes.push(recipe);
      }
    }
  });
  return categoryRecipes;
}

// (EG)
export const getIngredientsById = async (id) => {
  // const response = await fetch(`${baseURL}ingredients/${id}`);
  // const data = await convertToJson(response);
  const data = await publicRoute(`ingredients/${id}`);
  console.log("get ingredients by id function log: " + data);
  let ingredient = data.name;
  return ingredient;
}

// EG
export const createLiked = async (recipe_id, user_name) => {
  const body = {
    "name": user_name,
    "comment": "liked",
    "recipe_id": recipe_id
  }
  const data = await privateRoute("comments/", "POST", body);
  return data;
}

// EG
export const removeLikedById = async (comment_id) => {
  const data = await privateRoute(`comments/${comment_id}`, "DELETE");
  return data;
}

// (EG)
// get user profile
export const getUserProfile = async (user_id) => {
  const response = await privateRoute("users/");
  const data = response.filter(user => user.Auth0Id === user_id);
  console.log("get user profile function log: " + response);
  return data[0];
}

export const createUserProfile = async (userObj) => {
  // call the api to post the new user and return the user_id
  const data = await privateRoute("users/", "POST", userObj);
  return data;
}

  //example of sending a request to the API using the token from Auth0
  async function privateRoute(url, method = "GET", body = null) {
    const token = await get(auth0Client).getTokenSilently();
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };
    if (body !== null) {
      options.body = JSON.stringify(body);
    }
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

    //get recipe by id funtion
   export async function getRecipeById(id) {
    const response = await fetch(`${baseURL}recipes/${id}`);
    const data = await convertToJson(response);
    return data;
   }
