// Example data (10 recipes)
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
    {
        title: "Chicken Alfredo",
        image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
        ingredients: [
            "200g fettuccine",
            "2 chicken breasts",
            "1 cup heavy cream",
            "50g Parmesan cheese",
            "2 cloves garlic",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Cook fettuccine in salted boiling water until al dente.",
            "Cook chicken breasts in a pan until done, then slice.",
            "In a pan, sauté garlic in butter.",
            "Add heavy cream and bring to a simmer.",
            "Stir in Parmesan cheese until melted.",
            "Add fettuccine and chicken to the sauce.",
            "Season with salt and pepper.",
            "Serve immediately."
        ]
    },
    {
        title: "Beef Tacos",
        image: "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg",
        ingredients: [
            "200g ground beef",
            "8 taco shells",
            "1 onion",
            "1 tomato",
            "Lettuce",
            "Cheese",
            "Sour cream",
            "Taco seasoning"
        ],
        instructions: [
            "Cook ground beef in a pan until browned.",
            "Add taco seasoning and water, simmer until thickened.",
            "Chop onion, tomato, and lettuce.",
            "Fill taco shells with beef and toppings.",
            "Serve with cheese and sour cream."
        ]
    },
    {
        title: "Margherita Pizza",
        image: "https://foodbyjonister.com/wp-content/uploads/2020/01/MargheritaPizza.jpg",
        ingredients: [
            "1 pizza dough",
            "200g tomato sauce",
            "200g mozzarella cheese",
            "Fresh basil leaves",
            "Olive oil",
            "Salt"
        ],
        instructions: [
            "Preheat oven to 250°C (482°F).",
            "Roll out pizza dough.",
            "Spread tomato sauce over dough.",
            "Top with mozzarella cheese and basil leaves.",
            "Drizzle with olive oil and sprinkle with salt.",
            "Bake for 10-12 minutes.",
            "Serve hot."
        ]
    },
    {
        title: "Caesar Salad",
        image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
        ingredients: [
            "1 romaine lettuce",
            "100g croutons",
            "50g Parmesan cheese",
            "Caesar dressing",
            "1 chicken breast"
        ],
        instructions: [
            "Cook chicken breast in a pan until done, then slice.",
            "Chop romaine lettuce.",
            "Toss lettuce with Caesar dressing.",
            "Top with chicken, croutons, and Parmesan cheese.",
            "Serve immediately."
        ]
    },
    {
        title: "Beef Stroganoff",
        image: "https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg",
        ingredients: [
            "400g beef sirloin",
            "1 onion",
            "200g mushrooms",
            "1 cup beef broth",
            "1 cup sour cream",
            "1 tbsp Dijon mustard",
            "Salt and pepper to taste",
            "Fresh parsley"
        ],
        instructions: [
            "Slice beef into thin strips.",
            "Slice onion and mushrooms.",
            "In a pan, brown beef strips with onion.",
            "Add mushrooms and cook until tender.",
            "Stir in beef broth and simmer for 10 minutes.",
            "Stir in sour cream and Dijon mustard.",
            "Season with salt and pepper.",
            "Serve over egg noodles, garnished with fresh parsley."
        ]
    },
    {
        title: "Vegetable Stir Fry",
        image: "vegetable-stir-fry.jpg",
        ingredients: [
            "1 broccoli head",
            "1 bell pepper",
            "1 carrot",
            "100g snap peas",
            "100g mushrooms",
            "3 tbsp soy sauce",
            "1 tbsp honey",
            "2 cloves garlic",
            "1 tbsp ginger, minced",
            "2 tbsp vegetable oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Chop broccoli, bell pepper, carrot, snap peas, and mushrooms.",
            "In a bowl, mix soy sauce, honey, garlic, and ginger.",
            "Heat vegetable oil in a large pan or wok over medium-high heat.",
            "Add vegetables and stir fry until tender-crisp.",
            "Pour sauce over vegetables and toss to coat.",
            "Season with salt and pepper.",
            "Serve hot, optionally over rice."
        ]
    },
    {
        title: "Chicken Caesar Wrap",
        image: "chicken-caesar-wrap.jpg",
        ingredients: [
            "2 large tortilla wraps",
            "2 chicken breasts, grilled and sliced",
            "1 romaine lettuce",
            "50g Parmesan cheese",
            "Caesar dressing"
        ],
        instructions: [
            "Lay out tortilla wraps.",
            "Spread Caesar dressing on each wrap.",
            "Top with sliced grilled chicken, romaine lettuce, and Parmesan cheese.",
            "Roll up tightly, cut in half, and serve."
        ]
    },
    {
        title: "Ratatouille",
        image: "ratatouille.jpg",
        ingredients: [
            "1 eggplant",
            "1 zucchini",
            "1 yellow squash",
            "2 tomatoes",
            "1 onion",
            "3 cloves garlic",
            "2 tbsp olive oil",
            "1 tsp dried thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Slice eggplant, zucchini, yellow squash, and tomatoes into thin rounds.",
            "Chop onion and mince garlic.",
            "In a baking dish, layer vegetables alternately, overlapping slightly.",
            "Drizzle with olive oil and sprinkle with thyme, salt, and pepper.",
            "Cover with foil and bake for 45 minutes.",
            "Uncover and bake for an additional 15 minutes, until vegetables are tender.",
            "Serve hot, optionally garnished with fresh herbs."
        ]
    },
    {
        title: "Shrimp Scampi",
        image: "shrimp-scampi.jpg",
        ingredients: [
            "300g spaghetti",
            "300g shrimp, peeled and deveined",
            "4 tbsp butter",
            "4 cloves garlic, minced",
            "1/2 cup white wine",
            "1/4 cup lemon juice",
            "Salt and pepper to taste",
            "Fresh parsley"
        ],
        instructions: [
            "Cook spaghetti in salted boiling water until al dente.",
            "In a large skillet, melt butter over medium heat.",
            "Add minced garlic and cook until fragrant.",
            "Add shrimp and cook until pink, about 2-3 minutes per side.",
            "Pour in white wine and lemon juice, bring to a simmer.",
            "Season with salt and pepper.",
            "Toss cooked spaghetti with shrimp mixture.",
            "Serve hot, garnished with fresh parsley."
        ]
    },
    {
        title: "Greek Salad",
        image: "greek-salad.jpg",
        ingredients: [
            "1 cucumber",
            "2 tomatoes",
            "1 red onion",
            "100g Kalamata olives",
            "200g feta cheese",
            "Fresh oregano",
            "Olive oil",
            "Red wine vinegar",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Chop cucumber, tomatoes, and red onion.",
            "Pit Kalamata olives if necessary.",
            "Cut feta cheese into cubes.",
            "In a large bowl, combine cucumber, tomatoes, red onion, olives, and feta cheese.",
            "Drizzle with olive oil and red wine vinegar.",
            "Season with salt, pepper, and fresh oregano.",
            "Toss gently to combine.",
            "Serve immediately."
        ]
    }
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



