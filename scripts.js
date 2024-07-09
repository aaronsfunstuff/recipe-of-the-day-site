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
}

// Display a random recipe when the page loads
window.onload = displayRandomRecipe;
