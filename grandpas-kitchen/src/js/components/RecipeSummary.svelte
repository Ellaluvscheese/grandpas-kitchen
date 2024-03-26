<script>
    export let recipe = {};
</script>

<section>
    <a href="#recipe_details?recipe={recipe._id}"><img src="https://placehold.co/200x300" alt="Image of {recipe.name}"></a>
    <h3><a href="#recipe_details?recipe={recipe._id}">{recipe.name}</a></h3>
</section>