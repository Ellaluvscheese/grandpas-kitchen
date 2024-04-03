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
  import { getUserProfile, createUserProfile } from './js/externalServices';
  // import { get } from "svelte/store";

  let urlParams = {};
  
  let profile;

  let results = {};

  onMount(async () => {
    // create an Auth0 client
    auth0Client.set(await auth.createClient());
    // check to see if we are currently authenticated
    isAuthenticated.set(await $auth0Client.isAuthenticated());
    user.set(await $auth0Client.getUser());

    if ($isAuthenticated){
      console.log($user);
      console.log('sub',$user.sub);
      let userIdAuth = $user.sub.split("|")[1];
      console.log('userIdAuth',userIdAuth);
      //get the user
      try{
        console.log('profile',profile);
      profile = await getUserProfile(userIdAuth);
      console.log('profile',profile.json());
      // if user not found, create user
      // null or error, check later
      if (profile.status == 'error' || profile == null){
        let newUser = {
          "userFirstName": $user.given_name,
          "userLastName": "any",
          "email": "any",
          "Auth0Id": userIdAuth
        }
        // create the user
        profile = await createUserProfile(newUser);
        } else {
          $user = profile._id;
        }
      
      }catch(e){
        console.log('yuh',e);
      }
    }
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
      <section>
        <h1>Welcome to Grandpa's Kitchen</h1>
        <button on:click={login}>Login</button>
        <p>We noticed you are not signed in. Sign in or create an account to start adding recipes to your cook book!</p>
      </section>
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
