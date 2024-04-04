<script>
    import { getRecipes } from "../externalServices";

    const getStoredWeekNumber = () => {
    return parseInt(localStorage.getItem('currentWeek') || '-1');
}


    const saveCurrentWeekNumber = (weekNumber) => {
        localStorage.setItem('currentWeek', weekNumber);
    }

    const getRandomRecipeForWeek = async () => {
    // Get the current week number (assuming week starts from 0)
    const currentWeek = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));

    // Retrieve the stored week number
    const storedWeek = getStoredWeekNumber();

    // Check if it's a new week
    if (currentWeek !== storedWeek) {
        // Get the list of recipes
        const recipes = await getRecipes();

        // Check if recipes array is not empty
        if (recipes.length > 0) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * recipes.length);

        // Save the current week number
        saveCurrentWeekNumber(currentWeek);

        // Return the selected recipe for this week
        return recipes[randomIndex];
        } else {
        // If there are no recipes, return null or handle the case accordingly
        return null;
        }
    } else {
        // If it's the same week, return null to indicate that a recipe has already been selected
        return null;
    }
    }

    // Example usage
    getRandomRecipeForWeek().then(randomRecipe => {
    if (randomRecipe) {
        console.log("Random Recipe for this week:", randomRecipe);
    } else {
        console.log("No new recipe for this week.");
    }
    });

    </script>