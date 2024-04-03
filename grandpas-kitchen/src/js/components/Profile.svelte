<script>
    import { user, auth0Client, isAuthenticated } from "../stores.js";
    // @ts-ignore
    import { getUserProfile } from "../externalServices.js";
    import { onMount } from "svelte";
    import RecipeSummary from "./RecipeSummary.svelte";

    let saved = false;
    let created = false;
    let profile;
    let fName;
    let lName;

    // console.log($user.sub);
    // let userId = $user.sub.split("|")[1];
    // console.log(userId);

    // external services function
    onMount(async () => {
        if (isAuthenticated) {
            fName = $user.given_name;
            lName = $user.family_name;
        }
    });

    function showSaved() {
        saved = true;
        created = false;
    }

    function showCreated() {
        saved = false;
        created = true;
    }
</script>

<img src="{$user.picture}" alt="">
<h2>{fName} {lName}</h2>
<div>
    <button on:click={showSaved}>Saved</button>
    |
    <button on:click={showCreated}>Created</button>
</div>

{#if saved}
    <p>Saved recipes...</p>
    <!-- {#each $user.saved as recipe}
    <RecipeSummary recipe={recipe} /> -->
    <!-- {/each} -->
{:else if created}
    <p>Created recipes...</p>
    <!-- {#each $user.created as recipe}
    <RecipeSummary recipe={recipe} />
    {/each} -->
{/if}

<p>Profile</p>
{JSON.stringify($user)}