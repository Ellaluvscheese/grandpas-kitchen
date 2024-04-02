<script>
  // Function to handle form submission
  let recipes = [];
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const newRecipe = {
      name: event.target.name.value,
      description: event.target.description.value,
      cookTime: event.target.cookTime.value,
      prepTime: event.target.prepTime.value,
      servings: event.target.servings.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value,
      tags: event.target.tags.value,
      image: event.target.filename.value // You might need to handle file upload separately
    };
    recipes.push(newRecipe);
    event.target.reset();

    // Convert form data to JSON
    const jsonData = JSON.stringify(newRecipe);

    // Now you can do whatever you want with jsonData
    console.log(jsonData); // For example, logging the JSON data to console
  }
</script>
<form name="addRecipe" on:submit|preventDefault={handleSubmit}>
    <fieldset class="add_recipe">
      <legend>Add Recipe</legend>
      <label class="top"  for="name">Recipe Name:</label>
      <input type="text" name="name" required />
      <br>
  
      <label class="top" for="description">Recipe Description:</label>
      <textarea id="description" rows="3"></textarea>
      <br>
  
      <label class="top" for="cookTime">Cook Time:</label>
      <input type="number" name="cookTime" />
      <br>
  
      <label class="top" for="prepTime">Prep Time:</label>
      <input type="number" name="prepTime" />
      <br>
  
      <label class="top" for="servings">Servings:</label>
      <input type="number" name="servings" />
      <br>

      <label class="top" for="ingredients">Ingredients:</label>
      <textarea id="ingredients" rows="5" required></textarea>
      <br>
      
      <label class="top" for="instructions">Instructions:</label>
      <textarea id="instructions" rows="5" required></textarea>
      <br>

      <label class="top" for="tags">Recipe Tags:</label>
      <input type="text" name="tags" />
      <br>

      <label class="top" for="image">Recipe Image: </label>
      <input type="file" id="myFile" name="filename">
      <button type="submit" id="createRecipe">Create Recipe</button>
    </fieldset>
  </form>


  <style>
    form {
  display: flex;
  flex-direction: column;
  width: 600px;
}

legend {
  font-family: 'Caveat';
  font-size: 28px;
}

input[type="text"], input[type="number"],textarea {
  padding: 5%;
  margin-bottom: 5%;
  border-radius: 5px;
  border: 1px solid #D15220;
  width: 100%;
  box-sizing: border-box;
}
input[type="file"] {
  width: 100%;
  margin: 5% 0 5% 0;
}

button[type="submit"] {
  padding: 10px;
  background-color: #D15220;
  color: #F6E6D6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button {
  margin-top: 3%;
}
fieldset {
  font-size: 18px;
  font-weight:300;
}

form fieldset {
  margin: 2rem 1rem;
  border: 2px solid #D15220;
  border-radius: 10px;
  padding: 0.5rem 2%;
}

form legend {
  color: #D15220;
  margin: 0 1rem;
  padding: 0 0.5rem;
}

form label.top {
  display: block;
  padding-top: 1rem;
  color: #D15220;
}

  </style>