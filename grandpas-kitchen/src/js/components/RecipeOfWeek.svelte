<!-- RecipeOfWeek.svelte -->
<script>
    export let recipe = {}; // Define a prop for the recipe of the week
    console.log("Recipe prop:", recipe); // Log the recipe prop

</script>

<div class="recipe-of-the-week">
    
    <!-- Display recipe details -->
    <div class="weekImgTitle">
        <h2 class="weekTitle">Recipe of the Week</h2>
        <a href="#recipe_details?recipe={recipe._id}"><img class="recipeOfWeekImg" src="data:image/jpeg;base64, {recipe.recipeImage}" alt="Image of {recipe.name}"></a>
        <p class="titleP"><a class="title" href="#recipe_details?recipe={recipe._id}">{recipe.name}</a></p>
    </div>
    
    <!-- <p>{recipe.description}</p> -->
    <!-- Add more details as needed -->
</div>