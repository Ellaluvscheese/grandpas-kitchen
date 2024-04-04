<script>
    export let recipe = {};
    // find how to get the recipe id from console log 
</script>


<section>
    <img class="recipe-image" src="data:image/jpeg;base64, {recipe.recipeImage}" alt="Image of {recipe.name}">
</section>
<section>
    <a href="/index.html?recipe={recipe._id}">
    <h2>{recipe.name}</h2>
    <p class="recipe-description">{recipe.description}</p>
    <p class="recipe-catagories">{recipe.categories}</p>
    <p class="recipe-cooktime">Cooktime: {recipe.cookTime}</p><p class="recipe-preptime">| Preptime: {recipe.prepTime}</p>
    <p class="recipe-servings">Servings: {recipe.servings}</p>
    <p class="recipe-ingredients">Ingredients: {recipe.ingredients}</p>
    <p class="recipe-instructions">Instructions: {recipe.instructions}</p>
    </a> 
</section>
