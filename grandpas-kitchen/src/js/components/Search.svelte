<script>
    import SearchBar from "./SearchBar.svelte";

    function filterSearch(event) {
        const buttons = document.querySelectorAll('.filter-button');
        buttons.forEach(button => {
            if (button !== event.target) {
                button.classList.remove('selected');
            }
        });
        event.target.classList.toggle('selected');
        const filterType = event.target.dataset.filterType;
        switch (filterType) {
            case 'cat':
                console.log('Category');
                break;
            case 'ing':
                console.log('Ingredients');
                break;
            case 'name':
                console.log('Recipe Name');
                break;
        }
    }

</script>

<p>Search by: </p>
<ul>
    <li><button on:click={filterSearch} data-filterType="cat" class="filter-button selected">Category</button></li>
    <li><button on:click={filterSearch} data-filterType="ing" class="filter-button">Ingredients</button></li>
    <li><button on:click={filterSearch} data-filterType="name" class="filter-button">Recipe Name</button></li>
</ul>

<SearchBar />

<div>

</div>

<p>Search page</p>

<style>
    .selected{
        background-color: #D15220;
        color: #F6E6D6;
    }
</style>