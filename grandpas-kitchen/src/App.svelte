<script>
  // code: EG
  import MainHeader from './js/components/MainHeader.svelte';
  import MainFooter from './js/components/MainFooter.svelte';
  import Home from './js/components/Home.svelte';
  import Profile from './js/components/Profile.svelte';
  import Recipes from './js/components/Recipes.svelte';
  import Search from './js/components/Search.svelte';
  import { route, isAuthenticated, user, auth0Client } from './js/stores.js';
  import { onMount } from 'svelte';
  import auth from "./js/authService.js";
  // import { get } from "svelte/store";

  let urlParams = {};

  let results = {};

  onMount(async () => {
    // create an Auth0 client
    auth0Client.set(await auth.createClient());
    // check to see if we are currently authenticated
    isAuthenticated.set(await $auth0Client.isAuthenticated());
    user.set(await $auth0Client.getUser());
  });

  function handleRoute() {
    const [hash, params] = window.location.hash.split('?');
    if (params) urlParams = new URLSearchParams("?" + params);
    console.log(window.location);
    // if (!$isAuthenticated && hash == '#profile') {
    //   login();
    // } else {
      $route = hash;
    // }
  }

    // create helper functions for login/logout

  export function login() {
  auth.loginWithPopup();
  }

  export function logout() {
    auth.logout();
  }

  window.addEventListener('popstate', handleRoute);

</script>

<MainHeader />

<main>
  {#if $route == '#profile'}
    {#if $isAuthenticated}
      <Profile />
      <button on:click={logout}>Logout</button>
    {:else}
      <button on:click={login}>Login</button>
    {/if}
    {:else if $route == '#recipe_details'}
    <Recipes params={urlParams}/>
    {:else if $route == '#search'}
    <Search />
    {:else}
    <Home/>
  {/if}
  
</main>

<MainFooter />

<style>

</style>
