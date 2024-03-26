<script>
    import { getRecipes } from "../externalServices.js";
    import RecipeSummary from "./RecipeSummary.svelte";
    import SearchBar from "./SearchBar.svelte";
    import { recipes } from "../stores.js";
    import { onMount } from 'svelte';

    onMount(async () => {
        $recipes = await getRecipes();
    });


</script>

<div>

    {#each $recipes as recipe}
        <RecipeSummary recipe={recipe} />
    {/each}

</div>