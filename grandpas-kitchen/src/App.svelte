<script>
  import MainHeader from './js/components/MainHeader.svelte';
  import MainFooter from './js/components/MainFooter.svelte';
  import Home from './js/components/Home.svelte';
  import Profile from './js/components/Profile.svelte';
  import Recipes from './js/components/Recipes.svelte';
  import { route } from './js/stores.js';
  import { getParam } from './js/utils.js';

  let params = '';
  window.addEventListener('popstate', event => {
    $route = window.location.hash;
    // $route = $route.split('?')[0];
    console.log(window.location)
  })
</script>

<MainHeader />

<main>
  {#if $route == '#profile'}
    <Profile/>
    {:else if $route == '#recipe_details'}
    <Recipes/>
    {:else}
    <Home/>
  {/if}
  
</main>

<MainFooter />

<style>

</style>
