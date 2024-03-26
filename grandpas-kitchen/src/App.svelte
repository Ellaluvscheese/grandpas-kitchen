<script>
  import MainHeader from './js/components/MainHeader.svelte';
  import MainFooter from './js/components/MainFooter.svelte';
  import Home from './js/components/Home.svelte';
  import Profile from './js/components/Profile.svelte';
  import Recipes from './js/components/Recipes.svelte';
  import Search from './js/components/Search.svelte';
  import { route } from './js/stores.js';
  import { onMount } from 'svelte';

  let urlParams = {};

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

  window.addEventListener('popstate', handleRoute);

</script>

<MainHeader />

<main>
  {#if $route == '#profile'}
    <Profile/>
    {:else if $route == '#recipe_details'}
    <Recipes params={urlParams}/>
    {:else if $route == '#search'}
    <Search/>
    {:else if $route == '#home'}
    <Home/>
  {/if}
  
</main>

<MainFooter />

<style>

</style>
