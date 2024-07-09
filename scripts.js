// Example data (replace with your own recipes)
const recipes = [
    {
        title: "Spaghetti Carbonara",
        image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g Pecorino cheese",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook spaghetti in salted boiling water until al dente.",
            "Fry pancetta in a pan until crispy.",
            "Whisk eggs and Pecorino cheese in a bowl.",
            "Drain spaghetti, reserving some cooking water.",
            "Combine spaghetti with pancetta in the pan.",
            "Add egg mixture, stirring quickly until creamy.",
            "Season with salt and pepper.",
            "Serve immediately."
        ]
    },
    // Add more recipes as needed
];

// Function to display a random recipe
function displayRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    document.getElementById('recipe-title').textContent = recipe.title;
    document.getElementById('recipe-image').setAttribute('src', recipe.image);

    const ingredientsList = document.getElementById('recipe-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const instructionsList = document.getElementById('recipe-instructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    // Save button functionality
    const saveButton = document.getElementById('save-button');
    if (isRecipeSaved(recipe)) {
        saveButton.textContent = 'Recipe Saved';
        saveButton.disabled = true;
    } else {
        saveButton.textContent = 'Save Recipe';
        saveButton.disabled = false;
    }

    saveButton.onclick = function() {
        saveRecipe(recipe);
        displaySavedRecipes(); // Update the saved recipes list
    };
}

// Function to check if recipe is already saved
function isRecipeSaved(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    return savedRecipes.some(savedRecipe => savedRecipe.title === recipe.title);
}

// Function to save recipe to localStorage
function saveRecipe(recipe) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    // Check if the recipe already exists in the saved recipes
    if (isRecipeSaved(recipe)) {
        alert(`"${recipe.title}" is already saved.`);
        return;
    }

    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    alert(`"${recipe.title}" saved to your recipes!`);

    // Disable the save button
    const saveButton = document.getElementById('save-button');
    saveButton.textContent = 'Recipe Saved';
    saveButton.disabled = true;
}

// Function to remove recipe from localStorage
function removeRecipe(title) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    savedRecipes = savedRecipes.filter(recipe => recipe.title !== title);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    displaySavedRecipes();
}

// Function to display saved recipes
function displaySavedRecipes() {
    const savedRecipesList = document.getElementById('saved-recipes-list');
    savedRecipesList.innerHTML = '';

    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    if (savedRecipes.length === 0) {
        savedRecipesList.innerHTML = '<p>No saved recipes yet.</p>';
        return;
    }

    savedRecipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}">
            <h4>Ingredients</h4>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h4>Instructions</h4>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <button onclick="removeRecipe('${recipe.title}')">Remove</button>
        `;
        savedRecipesList.appendChild(recipeDiv);
    });
}

// Function to clear all saved recipes
function clearAllRecipes() {
    localStorage.removeItem('savedRecipes');
    displaySavedRecipes();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayRandomRecipe();
    displaySavedRecipes();
});

