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

//-----------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------- Sergio -----------------------------------------------------------------------
function toggleButtonClass(event) {
    const button = event.target;
    const buttonId = button.id;
    const firstClass = 'buttonNotLiked';
    const secondClass = 'buttonLiked';
    const firstText = 'Like ♡';
    const secondText = 'Liked ♥';

    const buttonStates = JSON.parse(localStorage.getItem('buttonStates')) || {};

    let newClass, newText;
    if (buttonStates[buttonId] === firstClass) {
        newClass = secondClass;
        newText = secondText;
    } else {
        newClass = firstClass;
        newText = firstText;
    }

    button.className = newClass;
    button.textContent = newText;
    buttonStates[buttonId] = newClass;
    
    localStorage.setItem('buttonStates', JSON.stringify(buttonStates));
}

function restoreButtonStates() {
    const buttonStates = JSON.parse(localStorage.getItem('buttonStates')) || {};
    for (const buttonId in buttonStates) {
        const button = document.getElementById(buttonId);
        if (button) {
            const buttonClass = buttonStates[buttonId];
            button.className = buttonClass;
            button.textContent = buttonClass === 'buttonNotLiked' ? 'Like ♥' : 'Liked ♡';
        }
    }
}

function setup() {
    console.log('Setting up buttons...');
    document.querySelectorAll('button[id^="liked-button-"]').forEach(button => {
        button.addEventListener('click', toggleButtonClass);
    });
    restoreButtonStates();
}

// Checks if the document is already loaded
if (document.readyState === 'loading') {
    // Wait for the load event if the document is not fully loaded
    window.addEventListener('load', setup);
} else {
    // Call setup immediately if the document is already in a 'complete' state
    setup();
}



//-----------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
</script>

<div>
    <button id="liked-button-{recipe._id}" class="buttonNotLiked">Like ♡</button>
</div>
