<script>
    import { onMount } from "svelte";
    import { category, recipes } from "../stores.js";
    import SearchBar from "./SearchBar.svelte";
    import RecipeSummary from "./RecipeSummary.svelte";

    // let $category;


    onMount(() => {
        $category = 'cat';
        $recipes = [];
        console.log('Category: ' + $category);
    });


    function filterSearch(event) {
        const buttons = document.querySelectorAll('.filter-button');
        buttons.forEach(button => {
            if (button !== event.target) {
                button.classList.remove('selected');
            }
        });
        event.target.classList.add('selected');
        const filterType = event.target.dataset.filterType;
        console.log('Filter: ' + filterType);
        switch (filterType) {
            case 'cat':
                console.log('Category');
                $category = 'cat';
                break;
            case 'ing':
                console.log('Ingredients');
                $category = 'ing';
                break;
            case 'name':
                console.log('Recipe Name');
                $category = 'name';
                break;
        }
    }

</script>

<p>Search by: </p>
<ul>
    <li><button on:click={filterSearch} id="catButton" data-filterType="cat" class="filter-button selected">Category</button></li>
    <li><button on:click={filterSearch} id="ingButton" data-filterType="ing" class="filter-button">Ingredients</button></li>
    <li><button on:click={filterSearch} id="nameButton" data-filterType="name" class="filter-button">Recipe Name</button></li>
</ul>

<SearchBar />

<div>
    {#each $recipes as recipe}
        <RecipeSummary recipe={recipe} />
    {/each}
</div>


<style>
    .selected{
        background-color: #D15220;
        color: #F6E6D6;
    }
</style>