<script>
    export let recipe = {};
</script>

<section>
    <a href="?recipe={recipe._id}#recipe_details"><img src="https://placehold.co/200x300" alt="Image of {recipe.name}"></a>
    <h3><a href="?recipe={recipe._id}#recipe_details">{recipe.name}</a></h3>
</section>