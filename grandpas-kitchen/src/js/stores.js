// Description: This file contains the stores that will be used to store the state of the application. (EG)
import { writable } from "svelte/store";

export const route = writable('');

export const recipes = writable([]);

export const category = writable('');

export const categoryRecipes = writable([]);

// add stores for tracking authentication
export const isAuthenticated = writable(false);

export const user = writable();
export const popupOpen = writable(false);
export const error = writable();
export const auth0Client = writable(null);