<script>
    // import { createLiked, removeLikedById } from "../externalServices.js"; 
    import { user } from "../stores.js"; // (EG)
    import { onMount } from "svelte";
    // ToDo: Implement the like button functionality (EG)
    // 1. Add a function to the button (EG)

    // this is the recipe object that will be passed to the component (EG)
    // you will use this object to add the recipe to the users liked recipes example: user.likedRecipes.push(recipe) (EG)
    export let recipe = {}; // (EG)

    onMount( async () => {
        if ($user.saved.includes(recipe)) {
            let button = document.getElementById(`liked-button-${recipe._id}`);
            button.classList.add('liked');
            button.style.color = 'red';
        }
    })

    // this is the function that will be called when the button is clicked (EG)
    async function liked(e) {
        // const likedId = e.target.dataset.liked;
        // change the heart from grey to red
        // add the recipe to the users liked recipes
        // when you do this, you will call a function from the externalServices.js file (note: You will need to make that function) (EG)
        let button = document.getElementById(`liked-button-${recipe._id}`);
        if ($user.saved.includes(recipe)) {
            button.classList.remove('liked');
            // removeLikedById(likedId); // (EG)
            $user.saved = $user.saved.filter(likedRecipe => likedRecipe._id !== recipe._id); // (EG)
        } else {
            button.classList.add('liked');
            button.style.color = 'red';
            // const likedReturn = await createLiked(recipe._id, $user.name); 
            // likedId.innerHTML = likedReturn._id; 
            // createLiked(recipe._id, $user.given_name); 
            $user.saved.push(recipe); // (EG)
        }
    }

</script>

<div>
    <button on:click={liked} id="liked-button-{recipe._id}">Like</button>
</div>

<style>
    .liked {
        color: red;
    }
</style>