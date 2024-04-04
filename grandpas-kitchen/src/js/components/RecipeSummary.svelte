<script>
    // Code: EG
    import { onMount } from "svelte";
    import { user } from "../stores.js";
    import LikeButton from "./LikeButton.svelte";
    export let recipe = {};

    onMount( async () => {
        if ($user.saved.includes(recipe)) {
            let button = document.getElementById(`liked-button-${recipe._id}`);
            button.classList.add('liked');
            button.style.color = 'red';
        }
    })
</script>

<section>
    <LikeButton recipe={recipe} />
    <a href="#recipe_details?recipe={recipe._id}"><img class="image-summary-size" src="data:image/jpeg;base64, {recipe.recipeImage}" alt="Image of {recipe.name}"></a>
    <p><a class="title" href="#recipe_details?recipe={recipe._id}">{recipe.name}</a></p>
</section>

<style>
    /* .image-summary-size {
        max-width: 200px;
        object-fit: cover;
    } */
</style>