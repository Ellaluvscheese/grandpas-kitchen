<script>
    // Code: EG
    import { getRecipes, getRandomRecipe } from "../externalServices.js";
    import RecipeSummary from "./RecipeSummary.svelte";
    import RecipeOfWeek from "./RecipeOfWeek.svelte";
    import { recipes } from "../stores.js";
    import { onMount } from 'svelte';

    let recipeOfWeek;
    
    onMount(async () => {
        $recipes = await getRecipes();
        recipeOfWeek = await getRandomRecipe(); // Fetch the recipe of the week
    });


</script>

<div class="recipes">
    <div class="basic-recipes">
       {#each $recipes as recipe}
        <RecipeSummary recipe={recipe} />
        {/each} 
    </div>
    

    <div class="recipeOfWeekHome">
        {#if recipeOfWeek}
        <RecipeOfWeek recipe={recipeOfWeek} />
        {/if}
    </div>
</div>