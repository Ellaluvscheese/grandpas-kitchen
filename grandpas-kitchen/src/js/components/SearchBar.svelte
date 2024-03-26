<script>
    import { getRecipesByCategory } from "../externalServices";
    import { recipes } from "../stores.js";
    let text = '';

    async function searched() {
        let hi = document.getElementById('hi');
        hi.innerHTML = 'You searched for: ' + text;
        $recipes = await getRecipesByCategory(text);
    }

</script>

<div class="searchBar">
    <input bind:value={text} type="text" placeholder="Search for a recipe">
    <button on:click={searched}>Search</button>
    <p id="hi"></p>
</div>