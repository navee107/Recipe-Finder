// Recipe data
const recipes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    image: "https://picsum.photos/400/300?random=1",
    category: "Main Course",
    cookTime: "45 min",
    servings: 4,
    ingredients: [
      "400g Spaghetti pasta",
      "500g Ground beef",
      "400g Canned tomatoes",
      "1 Large onion, diced",
      "3 Garlic cloves, minced",
      "2 tbsp Olive oil",
      "1 tsp Dried oregano",
      "1 tsp Dried basil",
      "Salt and pepper to taste",
      "Parmesan cheese for serving",
    ],
    instructions:
      "Heat olive oil in a large pan over medium heat. Add diced onion and cook until softened, about 5 minutes. Add minced garlic and cook for another minute. Add ground beef and cook, breaking it up with a spoon, until browned and cooked through. Add canned tomatoes, oregano, basil, salt, and pepper. Simmer for 20-25 minutes, stirring occasionally. Meanwhile, cook spaghetti according to package directions until al dente. Drain and serve with the Bolognese sauce, topped with grated Parmesan cheese.",
  },
  {
    id: 2,
    name: "Chocolate Fudge Cake",
    image: "https://picsum.photos/400/300?random=2",
    category: "Dessert",
    cookTime: "60 min",
    servings: 8,
    ingredients: [
      "200g Dark chocolate",
      "200g Butter",
      "200g Caster sugar",
      "4 Large eggs",
      "100g Plain flour",
      "50g Cocoa powder",
      "1 tsp Vanilla extract",
      "Pinch of salt",
      "Icing sugar for dusting",
    ],
    instructions:
      "Preheat oven to 180°C (160°C fan). Grease and line a 23cm round cake tin. Melt chocolate and butter together in a heatproof bowl over simmering water. Remove from heat and stir in sugar. Beat in eggs one at a time, then add vanilla extract. Sift together flour, cocoa powder, and salt, then fold into the chocolate mixture. Pour into prepared tin and bake for 45-50 minutes until a skewer inserted comes out with a few moist crumbs. Cool in tin for 10 minutes, then turn out onto a wire rack. Dust with icing sugar before serving.",
  },
  {
    id: 3,
    name: "Caesar Salad",
    image: "https://picsum.photos/400/300?random=3",
    category: "Salad",
    cookTime: "15 min",
    servings: 4,
    ingredients: [
      "2 Large romaine lettuce heads",
      "100g Parmesan cheese, grated",
      "2 cups Croutons",
      "4 Anchovy fillets",
      "2 Garlic cloves",
      "1 Egg yolk",
      "2 tbsp Lemon juice",
      "1 tsp Dijon mustard",
      "1/2 cup Olive oil",
      "Salt and black pepper",
    ],
    instructions:
      "Wash and chop romaine lettuce into bite-sized pieces. For the dressing, mash anchovies and garlic together to form a paste. Whisk in egg yolk, lemon juice, and Dijon mustard. Slowly drizzle in olive oil while whisking continuously until emulsified. Season with salt and pepper. Toss lettuce with dressing, add croutons and half the Parmesan cheese. Serve immediately with remaining Parmesan sprinkled on top.",
  },
  {
    id: 4,
    name: "Chicken Tikka Masala",
    image: "https://picsum.photos/400/300?random=4",
    category: "Main Course",
    cookTime: "50 min",
    servings: 6,
    ingredients: [
      "1kg Chicken breast, cubed",
      "200ml Greek yogurt",
      "2 tbsp Tikka masala paste",
      "400ml Coconut milk",
      "400g Canned tomatoes",
      "1 Large onion, sliced",
      "3 Garlic cloves, minced",
      "1 inch Fresh ginger, grated",
      "2 tbsp Vegetable oil",
      "Fresh coriander for garnish",
      "Basmati rice to serve",
    ],
    instructions:
      "Marinate chicken pieces in half the yogurt and 1 tbsp tikka masala paste for at least 30 minutes. Heat oil in a large pan and cook chicken until golden. Remove and set aside. In the same pan, cook onion until softened, add garlic and ginger, cook for 1 minute. Add remaining tikka masala paste, cook for 30 seconds. Add tomatoes and coconut milk, simmer for 10 minutes. Return chicken to pan, add remaining yogurt, and simmer for 15 minutes until chicken is cooked through. Garnish with fresh coriander and serve with basmati rice.",
  },
  {
    id: 5,
    name: "Pancakes",
    image: "https://picsum.photos/400/300?random=5",
    category: "Breakfast",
    cookTime: "20 min",
    servings: 4,
    ingredients: [
      "200g Plain flour",
      "2 tsp Baking powder",
      "1 tbsp Caster sugar",
      "1 tsp Salt",
      "300ml Milk",
      "2 Large eggs",
      "50g Butter, melted",
      "1 tsp Vanilla extract",
      "Butter for cooking",
      "Maple syrup to serve",
    ],
    instructions:
      "In a large bowl, whisk together flour, baking powder, sugar, and salt. In another bowl, whisk together milk, eggs, melted butter, and vanilla extract. Pour the wet ingredients into the dry ingredients and stir until just combined (don't overmix - a few lumps are fine). Heat a non-stick pan over medium heat and add a little butter. Pour 1/4 cup of batter for each pancake. Cook until bubbles form on the surface and edges look set, about 2-3 minutes. Flip and cook for another 1-2 minutes until golden brown. Serve hot with maple syrup.",
  },
  {
    id: 6,
    name: "Stuffed Bell Peppers",
    image: "https://picsum.photos/400/300?random=6",
    category: "Main Course",
    cookTime: "40 min",
    servings: 4,
    ingredients: [
      "4 Large bell peppers",
      "300g Ground turkey",
      "1 cup Cooked rice",
      "1 Small onion, diced",
      "2 Garlic cloves, minced",
      "1 can Diced tomatoes",
      "100g Mozzarella cheese, grated",
      "2 tbsp Olive oil",
      "1 tsp Italian seasoning",
      "Salt and pepper to taste",
    ],
    instructions:
      "Preheat oven to 190°C. Cut tops off bell peppers and remove seeds and membranes. Heat olive oil in a large skillet over medium heat. Add onion and cook until softened, about 5 minutes. Add garlic and cook for 1 minute. Add ground turkey and cook until browned. Stir in diced tomatoes, cooked rice, Italian seasoning, salt, and pepper. Cook for 5 minutes. Stuff each pepper with the turkey mixture and place in a baking dish. Cover with foil and bake for 25 minutes. Remove foil, top with mozzarella cheese, and bake for another 10 minutes until cheese is melted and peppers are tender.",
  },
  {
    id: 7,
    name: "Bruschetta",
    image: "https://picsum.photos/400/300?random=7",
    category: "Appetizer",
    cookTime: "15 min",
    servings: 6,
    ingredients: [
      "1 French baguette, sliced",
      "4 Large tomatoes, diced",
      "3 Garlic cloves",
      "1/4 cup Fresh basil, chopped",
      "3 tbsp Extra virgin olive oil",
      "2 tbsp Balsamic vinegar",
      "100g Fresh mozzarella, diced",
      "Salt and pepper to taste",
    ],
    instructions:
      "Preheat oven to 200°C. Arrange baguette slices on a baking sheet and toast for 5-7 minutes until golden. Rub each slice with a garlic clove while still warm. In a bowl, combine diced tomatoes, chopped basil, olive oil, balsamic vinegar, salt, and pepper. Let stand for 10 minutes to allow flavors to meld. Top each toasted bread slice with the tomato mixture and diced mozzarella. Serve immediately as an appetizer or light meal.",
  },
  {
    id: 8,
    name: "Banana Bread",
    image: "https://picsum.photos/400/300?random=8",
    category: "Dessert",
    cookTime: "65 min",
    servings: 10,
    ingredients: [
      "3 Ripe bananas, mashed",
      "200g Plain flour",
      "150g Brown sugar",
      "75g Butter, melted",
      "1 Large egg",
      "1 tsp Baking soda",
      "1 tsp Vanilla extract",
      "1/2 tsp Salt",
      "1/2 tsp Cinnamon",
      "100g Chopped walnuts (optional)",
    ],
    instructions:
      "Preheat oven to 175°C. Grease a 23x13cm loaf tin. In a large bowl, mash bananas until smooth. Stir in melted butter, brown sugar, egg, and vanilla extract. In a separate bowl, whisk together flour, baking soda, salt, and cinnamon. Add dry ingredients to banana mixture and stir until just combined. Fold in walnuts if using. Pour batter into prepared loaf tin and bake for 55-60 minutes, or until a toothpick inserted in center comes out clean. Cool in tin for 10 minutes, then turn out onto a wire rack to cool completely before slicing.",
  },
]

// DOM elements
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")
const recipesGrid = document.getElementById("recipesGrid")
const noResults = document.getElementById("noResults")
const resultsCount = document.getElementById("resultsCount")
const modalOverlay = document.getElementById("modalOverlay")
const modalContent = document.getElementById("modalContent")
const modalClose = document.getElementById("modalClose")
const favoriteBtn = document.getElementById("favoriteBtn")
const themeToggle = document.getElementById("themeToggle")

// State
let filteredRecipes = [...recipes]
let favorites = JSON.parse(localStorage.getItem("recipeFavorites")) || []
let currentRecipe = null

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  renderRecipes(recipes)
  updateResultsCount(recipes.length)
  initializeTheme()
  setupEventListeners()
})

// Event listeners
function setupEventListeners() {
  searchInput.addEventListener("input", handleSearch)
  categoryFilter.addEventListener("change", handleCategoryFilter)
  modalClose.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", handleModalOverlayClick)
  favoriteBtn.addEventListener("click", toggleFavorite)
  themeToggle.addEventListener("click", toggleTheme)

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal()
    }
  })
}

// Search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim()
  const selectedCategory = categoryFilter.value

  filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.name.toLowerCase().includes(searchTerm) ||
      recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm))
    const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  renderRecipes(filteredRecipes)
  updateResultsCount(filteredRecipes.length)
}

// Category filter
function handleCategoryFilter() {
  handleSearch() // Reuse search logic with category filter
}

// Render recipes
function renderRecipes(recipesToRender) {
  if (recipesToRender.length === 0) {
    recipesGrid.style.display = "none"
    noResults.style.display = "block"
    return
  }

  recipesGrid.style.display = "grid"
  noResults.style.display = "none"

  recipesGrid.innerHTML = recipesToRender
    .map(
      (recipe) => `
        <div class="recipe-card" onclick="openRecipeModal(${recipe.id})" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" loading="lazy">
            <div class="recipe-info">
                <span class="recipe-category">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-meta">
                    <div class="recipe-time">
                        <i class="fas fa-clock"></i>
                        <span>${recipe.cookTime}</span>
                    </div>
                    <button class="view-recipe-btn" onclick="event.stopPropagation(); openRecipeModal(${recipe.id})">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Update results count
function updateResultsCount(count) {
  const searchTerm = searchInput.value.trim()
  const selectedCategory = categoryFilter.value

  if (searchTerm || selectedCategory !== "all") {
    resultsCount.textContent = `Found ${count} recipe${count !== 1 ? "s" : ""}`
  } else {
    resultsCount.textContent = `Showing all ${count} recipes`
  }
}

// Modal functionality
function openRecipeModal(recipeId) {
  currentRecipe = recipes.find((recipe) => recipe.id === recipeId)
  if (!currentRecipe) return

  const isFavorite = favorites.includes(recipeId)

  modalContent.innerHTML = `
        <img src="${currentRecipe.image}" alt="${currentRecipe.name}" class="modal-recipe-image">
        <div class="modal-recipe-content">
            <span class="modal-recipe-category">${currentRecipe.category}</span>
            <h2 class="modal-recipe-title">${currentRecipe.name}</h2>
            
            <div class="modal-recipe-meta">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${currentRecipe.cookTime}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>Serves ${currentRecipe.servings}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-utensils"></i>
                    <span>${currentRecipe.ingredients.length} ingredients</span>
                </div>
            </div>
            
            <div class="ingredients-section">
                <h3 class="section-title">
                    <i class="fas fa-list"></i>
                    Ingredients
                </h3>
                <ul class="ingredients-list">
                    ${currentRecipe.ingredients
                      .map(
                        (ingredient) => `
                        <li>${ingredient}</li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
            
            <div class="instructions-section">
                <h3 class="section-title">
                    <i class="fas fa-clipboard-list"></i>
                    Instructions
                </h3>
                <p class="instructions-text">${currentRecipe.instructions}</p>
            </div>
        </div>
    `

  // Update favorite button
  favoriteBtn.innerHTML = isFavorite ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'
  favoriteBtn.classList.toggle("active", isFavorite)

  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeModal() {
  modalOverlay.classList.remove("active")
  document.body.style.overflow = "auto"
  currentRecipe = null
}

function handleModalOverlayClick(e) {
  if (e.target === modalOverlay) {
    closeModal()
  }
}

// Favorites functionality
function toggleFavorite() {
  if (!currentRecipe) return

  const recipeId = currentRecipe.id
  const isFavorite = favorites.includes(recipeId)

  if (isFavorite) {
    favorites = favorites.filter((id) => id !== recipeId)
    favoriteBtn.innerHTML = '<i class="far fa-heart"></i>'
    favoriteBtn.classList.remove("active")
  } else {
    favorites.push(recipeId)
    favoriteBtn.innerHTML = '<i class="fas fa-heart"></i>'
    favoriteBtn.classList.add("active")
  }

  localStorage.setItem("recipeFavorites", JSON.stringify(favorites))
}

// Theme functionality
function initializeTheme() {
  const savedTheme = localStorage.getItem("recipeFinderTheme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("recipeFinderTheme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Add debounced search for better performance
const debouncedSearch = debounce(handleSearch, 300)
searchInput.removeEventListener("input", handleSearch)
searchInput.addEventListener("input", debouncedSearch)

// Add smooth scroll behavior for better UX
function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add loading states for images
function addImageLoadingStates() {
  const images = document.querySelectorAll(".recipe-image, .modal-recipe-image")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })
    img.addEventListener("error", function () {
      this.src = "https://picsum.photos/400/300?random=placeholder"
    })
  })
}

// Initialize image loading states after DOM content is loaded
document.addEventListener("DOMContentLoaded", addImageLoadingStates)
