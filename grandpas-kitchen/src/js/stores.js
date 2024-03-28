import { writable } from "svelte/store";

export const route = writable('');

export const recipes = writable([]);

export const category = writable('');

export const categoryRecipes = writable([]);