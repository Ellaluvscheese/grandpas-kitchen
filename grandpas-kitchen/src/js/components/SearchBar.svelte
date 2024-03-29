<script>
    import { getRecipesByCategory } from "../externalServices";
    import { recipes, category } from "../stores.js";
    export let text = '';
    import { onMount } from 'svelte';

    onMount(() => {
        $recipes = [];
    });

    async function searched() {
        $recipes = [];
        let hi = document.getElementById('hi');
        hi.innerHTML = 'Displaying results for: ' + text;
        $recipes = await getRecipesByCategory($category, text);
        console.log($recipes);
    }

</script>

<div class="searchBar">
    <input bind:value={text} type="text" placeholder="Search for a recipe">
    <button on:click={searched}>Search</button>
    <p id="hi"></p>
</div>