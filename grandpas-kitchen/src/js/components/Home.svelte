<script>
    import { getRecipes } from "../externalServices.js";
    import RecipeSummary from "./RecipeSummary.svelte";

    let promise = getRecipes();

</script>

<div>

    {#await promise}
        <p>Loading...</p>
    {:then recipes}
        {#each recipes as recipe}
            <RecipeSummary recipe={recipe} />
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div>