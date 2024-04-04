<script>
    import { user, auth0Client, isAuthenticated } from "../stores.js";
    // @ts-ignore
    import { getUserProfile } from "../externalServices.js";
    import { onMount } from "svelte";
    import RecipeSummary from "./RecipeSummary.svelte";

    let saved = true;
    let created = false;
    let profile;
    let fName;
    let lName;

    // external services function
    onMount(async () => {
        console.log('user',$user);
        if (isAuthenticated) {
            fName = $user.given_name;
            lName = $user.family_name;
        }
        updatedColor();
    });

    console.log('hi',$user.saved.length)

    function updatedColor() {
        const savedButton = document.getElementById('saved-button');
        const createdButton = document.getElementById('created-button');
        
        if (saved){
            savedButton.style.color = '#F6E6D6';
            savedButton.style.backgroundColor = '#D15220';

            createdButton.style.color = '#D15220';
            createdButton.style.backgroundColor = '#F6E6D6';
        } else if (created){
            createdButton.style.color = '#F6E6D6';
            createdButton.style.backgroundColor = '#D15220';

            savedButton.style.color = '#D15220';
            savedButton.style.backgroundColor = '#F6E6D6';
        }
    }

    function showSaved() {
        saved = true;
        created = false;
        updatedColor();
    }

    function showCreated() {
        saved = false;
        created = true;
        updatedColor();
    }
</script>

<img src="{$user.picture}" alt="">
<h2>{fName} {lName}</h2>
<div>
    <button on:click={showSaved} id="saved-button">Saved</button>
    |
    <button on:click={showCreated} id="created-button">Created</button>
</div>

{#if saved}
    <h2>Saved Recipes:</h2>
    {#if $user.saved.length == 0 }
        <p>No saved recipes...</p>
    {:else}
        {#each $user.saved as recipe}
            <RecipeSummary recipe={recipe} />
        {/each}
    {/if}
{:else if created}
    <h2>Created Recipes:</h2>
    {#if $user.created.length == 0 }
        <p>No created recipes...</p>
    {:else}
        {#each $user.created as recipe}
            <RecipeSummary recipe={recipe} />
        {/each}
    {/if}
{/if}

<!-- <p>Profile</p>
{JSON.stringify($user)} -->