<script>
    import { getRecipesByCategory } from "../externalServices.js";
    import { recipes, category } from "../stores.js";
    export let text = '';
    // import { onMount } from 'svelte';

    // onMount(() => {
    //     $recipes = [];
    // });
    $recipes = [];
    let showNoResults = false;

    async function searched() {
        $recipes = [];
        console.log('recipes on click:  ' + $recipes);
        let hi = document.getElementById('hi');
        hi.innerHTML = 'Displaying results for: "' + text.toLowerCase() + '"';
        $recipes = await getRecipesByCategory($category, text);
        console.log($recipes);
        showNoResults = $recipes.length === 0;
    }

</script>

<div class="searchBar">
    <input bind:value={text} type="text" placeholder="Search for a recipe">
    <button on:click={searched}>Search</button>
    <p id="hi"></p>
    {#if showNoResults}
    <p>Sorry, no recipes match your search. Try something else!</p>
    {/if}
</div>