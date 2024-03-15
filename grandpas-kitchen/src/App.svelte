<script>
  import MainHeader from './js/components/MainHeader.svelte';
  import MainFooter from './js/components/MainFooter.svelte';
  import Home from './js/components/Home.svelte';
  import Profile from './js/components/Profile.svelte';
  import Recipes from './js/components/Recipes.svelte';
  import { route } from './js/stores.js';

  window.addEventListener('popstate', event => {
    $route = window.location.hash;
  })
</script>

<MainHeader />

<main>
  {#if $route == '#profile'}
    <Profile/>
    {:else if $route == '#recipes'}
    <Recipes/>
    {:else}
    <Home/>
  {/if}
  
</main>

<MainFooter />

<style>

</style>
