<script>
    export let recipe = {};
</script>

<section>
    <a href="#recipe_details?recipe={recipe._id}"><img class="image-summary-size" src="data:image/jpeg;base64, {recipe.recipeImage}" alt="Image of {recipe.name}"></a>
    <h3><a href="#recipe_details?recipe={recipe._id}">{recipe.name}</a></h3>
</section>

<style>
    .image-summary-size {
        max-width: 400px;
        object-fit: cover;
    }
</style>