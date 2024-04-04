<script>
  import { getRecipeById } from "../externalServices.js";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  export let params = {};
  let recipeDetails = {};

  onMount(async () => {
    const recipeId = params.get("recipe");
    console.log("hello", recipeId);
    recipeDetails = await getRecipeById(recipeId);
  });
  console.log(recipeDetails);
</script>

{#if recipeDetails.name}
  <section class="recipe-container">
    <section class="image-section">
      <img
        class="recipe-image"
        src="data:image/jpeg;base64, {recipeDetails.recipeImage}"
        alt="Image of {recipeDetails.name}"
      />
    </section>
    <section class="details-section">
      <h2>{recipeDetails.name}</h2>
      <p class="recipe-description">{recipeDetails.description}</p>
      <p class="recipe-catagories">{recipeDetails.categories}</p>
      <div class="recipe-info">
        <p class="recipe-cooktime">
          Cooktime: {recipeDetails.cookTime} min&nbsp
        </p>
        <p class="recipe-preptime">
          | Preptime: {recipeDetails.prepTime} min&nbsp
        </p>
        <p class="recipe-servings">| Servings: {recipeDetails.servings}</p>
      </div>
      <p class="recipe-ingredients">Ingredients:</p>
      <ul>
        {#each recipeDetails.ingredients as ingredient}
          <li>{ingredient.name}</li>
        {/each}
      </ul>
      <p class="recipe-instructions">Instructions:</p>
      <ol>
        <li>{recipeDetails.instructions}</li>
      </ol>
    </section>
  </section>
{:else}
  <p>Loading...</p>
{/if}

<style>
  .recipe-container {
    display: flex;
  }
  .image-section {
    flex: 1;
    margin-left: 15%;
  }

  .details-section {
    flex: 2;
    margin-left: 5%;
    margin-right: 15%;
  }
  .recipe-image {
    max-height: 550px;
    border-radius: 30px;
    margin-top: 20px;
  }

  .recipe-info {
    display: flex;
  }
  .recipe-info p {
    margin: 0;
  }
  h2 {
    font-weight: 600;
  }

  .recipe-catagories {
    background: lightgray;
    padding: 10px;
    border-radius: 10px;
  }
</style>
