<script>
    // ToDo: Implement the like button functionality (EG)
    // 1. Add a function to the button (EG)

    // this is the recipe object that will be passed to the component (EG)
    // you will use this object to add the recipe to the users liked recipes example: user.likedRecipes.push(recipe) (EG)
    export let recipe = {}; // (EG)

    // this is the function that will be called when the button is clicked (EG)
    function liked() {
        // change the heart from grey to red
        // add the recipe to the users liked recipes
        // when you do this, you will call a function from the externalServices.js file (note: You will need to make that function) (EG)

    }



</script>

<div>
    <button on:click={liked} id="liked-button">Like</button>
</div>