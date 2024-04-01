<script>
  import { getRecipeById } from "../externalServices.js";
  import {onMount} from "svelte";
  import { get } from "svelte/store";

  export let params = {};
  let recipeDetails ={};

 onMount (async () => {
    const recipeId = params.get("id");
    console.log(recipeId);
    recipeDetails = await getRecipeById(recipeId);
 });
  
</script>

<section>
  <img
    class="recipe-image"
    src="data:image/jpeg;base64, {recipeDetails.recipeImage}"
    alt="Image of {recipeDetails.name}"
  />
</section>
<section>
  <a href="/index.html?recipe={recipeDetails._id}">
    <h2>{recipeDetails.name}</h2>
    <p class="recipe-description">{recipeDetails.description}</p>
    <p class="recipe-catagories">{recipeDetails.categories}</p>
    <p class="recipe-cooktime">Cooktime: {recipeDetails.cookTime}</p>
    <p class="recipe-preptime">| Preptime: {recipeDetails.prepTime}</p>
    <p class="recipe-servings">Servings: {recipeDetails.servings}</p>
    <p class="recipe-ingredients">Ingredients: {recipeDetails.ingredients}</p>
    <p class="recipe-instructions">
      Instructions: {recipeDetails.instructions}
    </p>
  </a>
</section>
