document.addEventListener('DOMContentLoaded', () => {

    // 1. RECIPE DATA (Aap yahan naye recipes add kar sakte hain)
    const recipesData = [
        {
            id: 1,
            title: "Classic Pancakes",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=500&auto=format&fit=crop",
            time: "25 mins",
            desc: "Fluffy, golden pancakes perfect for a weekend breakfast.",
            ingredients: ["1 ½ cups all-purpose flour", "3 ½ tsp baking powder", "1 tbsp white sugar", "¼ tsp salt", "1 ¼ cups milk", "1 egg", "3 tbsp melted butter"],
            steps: ["Sift flour, baking powder, sugar, and salt in a bowl.", "Make a well, add milk, butter, and egg. Mix until smooth.", "Heat a lightly oiled griddle over medium-high heat.", "Pour 1/4 cup batter for each pancake.", "Cook until bubbles form, flip, and cook until golden."]
        },
        {
            id: 2,
            title: "Creamy Garlic Pasta",
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=500&auto=format&fit=crop",
            time: "20 mins",
            desc: "Rich and creamy pasta loaded with garlic and parmesan.",
            ingredients: ["200g Pasta", "4 cloves Garlic (minced)", "1 cup Heavy Cream", "1/2 cup Parmesan Cheese", "2 tbsp Butter", "Salt & Pepper"],
            steps: ["Boil pasta in salted water until al dente.", "Melt butter in a pan, add garlic and sauté for 1 min.", "Pour in heavy cream and bring to a simmer.", "Add parmesan cheese and stir until melted.", "Toss the cooked pasta into the sauce and serve."]
        },
        {
            id: 3,
            title: "Fresh Avocado Salad",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop",
            time: "10 mins",
            desc: "A healthy and refreshing salad with a zesty lime dressing.",
            ingredients: ["2 Ripe Avocados", "1 cup Cherry Tomatoes", "1/2 Red Onion", "1 Lime (juiced)", "2 tbsp Olive Oil", "Fresh Cilantro"],
            steps: ["Dice the avocados and halve the cherry tomatoes.", "Finely chop the red onion and cilantro.", "In a bowl, whisk lime juice, olive oil, salt, and pepper.", "Add all vegetables to the bowl.", "Gently toss to coat and serve fresh."]
        },
        {
            id: 4,
            title: "Chocolate Chip Cookies",
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=500&auto=format&fit=crop",
            time: "45 mins",
            desc: "Soft, chewy, and loaded with chocolate chips.",
            ingredients: ["2 ¼ cups Flour", "1 tsp Baking Soda", "1 cup Butter", "¾ cup Sugar", "¾ cup Brown Sugar", "2 Eggs", "2 cups Chocolate Chips"],
            steps: ["Preheat oven to 375°F (190°C).", "Cream together butter, white sugar, and brown sugar.", "Beat in eggs one at a time.", "Stir in flour and baking soda, then fold in chocolate chips.", "Drop by spoonfuls onto ungreased pans and bake for 10 mins."]
        },
        {
            id: 5,
            title: "Margherita Pizza",
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=500&auto=format&fit=crop",
            time: "30 mins",
            desc: "Classic Italian pizza with fresh basil and melted mozzarella.",
            ingredients: ["Pizza dough", "1/2 cup Tomato sauce", "200g Fresh mozzarella", "Fresh basil leaves", "2 tbsp Olive oil"],
            steps: ["Preheat oven to 250°C (480°F).", "Roll out the pizza dough on a floured surface.", "Spread tomato sauce evenly and add mozzarella slices.", "Bake for 10-12 minutes until crust is golden.", "Top with fresh basil and drizzle olive oil before serving."]
        },
        {
            id: 6,
            title: "Chicken Biryani",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500&auto=format&fit=crop",
            time: "60 mins",
            desc: "Aromatic and flavorful Indian rice dish layered with spices.",
            ingredients: ["2 cups Basmati rice", "500g Chicken", "1 cup Yogurt", "2 tbsp Biryani masala", "2 sliced Onions", "A pinch of Saffron"],
            steps: ["Marinate chicken in yogurt and biryani spices for 30 mins.", "Parboil the rice with whole spices until 70% cooked.", "In a heavy pot, layer the marinated chicken and rice.", "Add fried onions and saffron milk on top.", "Cover and cook on low heat (dum) for 20 minutes. Serve hot."]
        },
        {
            id: 7,
            title: "Mango Smoothie",
            image: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=500&auto=format&fit=crop",
            time: "5 mins",
            desc: "Refreshing and sweet summer drink made with ripe mangoes.",
            ingredients: ["1 large ripe mango", "1/2 cup Greek yogurt", "1/4 cup Milk", "1 tbsp Honey", "4-5 Ice cubes"],
            steps: ["Peel and chop the mango into cubes.", "Add mango, yogurt, milk, honey, and ice to a blender.", "Blend on high speed until completely smooth.", "Pour into serving glasses and serve chilled."]
        },
        {
            id: 8,
            title: "Beef Tacos",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=500&auto=format&fit=crop",
            time: "25 mins",
            desc: "Spicy and savory Mexican tacos with fresh toppings.",
            ingredients: ["500g Ground Beef", "1 packet Taco seasoning", "8 Taco shells", "1 cup Lettuce (shredded)", "1 cup Cheese (grated)", "Salsa and Sour cream"],
            steps: ["Brown the ground beef in a skillet over medium heat.", "Add taco seasoning and a little water. Simmer for 5 mins.", "Warm the taco shells in the oven.", "Fill shells with beef, lettuce, and cheese.", "Top with salsa and sour cream."]
        },
        {
            id: 9,
            title: "Vegetable Stir-Fry",
            image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=500&auto=format&fit=crop",
            time: "15 mins",
            desc: "Quick and healthy colorful vegetables tossed in a savory sauce.",
            ingredients: ["2 cups Broccoli florets", "1 Bell pepper (sliced)", "1 Carrot (julienned)", "3 tbsp Soy sauce", "1 tbsp Sesame oil", "1 tsp Ginger (grated)"],
            steps: ["Heat sesame oil in a wok or large pan.", "Add ginger and sauté for 30 seconds.", "Add all the vegetables and stir-fry on high heat for 5-7 mins.", "Pour in the soy sauce and toss to coat.", "Serve immediately over steamed rice."]
        },
        {
            id: 10,
            title: "Chocolate Brownies",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500&auto=format&fit=crop",
            time: "40 mins",
            desc: "Fudgy, rich, and decadent chocolate brownies.",
            ingredients: ["1/2 cup Butter", "1 cup Sugar", "2 Eggs", "1/3 cup Cocoa powder", "1/2 cup Flour", "1/4 tsp Salt"],
            steps: ["Preheat oven to 175°C (350°F) and grease a baking pan.", "Melt butter in a saucepan, then remove from heat.", "Stir in sugar, eggs, and vanilla extract.", "Beat in cocoa, flour, and salt.", "Spread into the pan and bake for 25 minutes. Let cool before cutting."]
        },
        {
            id: 11,
            title: "Caesar Salad",
            image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=500&auto=format&fit=crop",
            time: "15 mins",
            desc: "Crisp romaine lettuce tossed in a creamy Caesar dressing.",
            ingredients: ["1 head Romaine lettuce", "1/2 cup Croutons", "1/4 cup Parmesan cheese", "1/2 cup Caesar dressing", "Black pepper"],
            steps: ["Wash and chop the romaine lettuce.", "Place lettuce in a large bowl.", "Drizzle with Caesar dressing and toss well.", "Add croutons and Parmesan cheese.", "Toss gently and top with freshly cracked black pepper."]
        },
        {
            id: 12,
            title: "Tomato Basil Soup",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=500&auto=format&fit=crop",
            time: "35 mins",
            desc: "Comforting and creamy tomato soup with fresh basil.",
            ingredients: ["6 large Tomatoes", "1 Onion (chopped)", "3 cloves Garlic", "2 cups Vegetable broth", "1/2 cup Heavy cream", "Fresh basil leaves"],
            steps: ["Sauté onion and garlic in a pot until soft.", "Add chopped tomatoes and vegetable broth.", "Simmer for 20 minutes until tomatoes are soft.", "Blend the soup until smooth using an immersion blender.", "Stir in heavy cream and fresh basil before serving."]
        },
        {
            id: 13,
            title: "Grilled Cheese Sandwich",
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500&auto=format&fit=crop",
            time: "10 mins",
            desc: "Crispy, buttery bread with gooey melted cheese.",
            ingredients: ["4 slices Bread", "4 slices Cheddar cheese", "2 tbsp Butter (softened)"],
            steps: ["Butter one side of each slice of bread.", "Place cheese between two slices, buttered sides facing out.", "Heat a skillet over medium heat.", "Grill the sandwich until golden brown on both sides.", "Cut in half and serve hot."]
        },
        {
            id: 14,
            title: "Baked Salmon",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=500&auto=format&fit=crop",
            time: "20 mins",
            desc: "Healthy and flaky salmon fillets baked with lemon and herbs.",
            ingredients: ["2 Salmon fillets", "1 Lemon (sliced)", "2 tbsp Olive oil", "2 cloves Garlic (minced)", "Salt, pepper, and dill"],
            steps: ["Preheat oven to 200°C (400°F).", "Place salmon on a lined baking sheet.", "Drizzle with olive oil and rub with minced garlic.", "Top with lemon slices and sprinkle with salt, pepper, and dill.", "Bake for 12-15 minutes until salmon flakes easily."]
        },
        {
            id: 15,
            title: "Blueberry Muffins",
            image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=500&auto=format&fit=crop",
            time: "30 mins",
            desc: "Soft, moist, and bursting with juicy blueberries.",
            ingredients: ["1 1/2 cups Flour", "3/4 cup Sugar", "2 tsp Baking powder", "1/3 cup Oil", "1 Egg", "1/2 cup Milk", "1 cup Blueberries"],
            steps: ["Preheat oven to 190°C (375°F) and line a muffin tin.", "Whisk flour, sugar, baking powder, and salt in a bowl.", "In another bowl, mix oil, egg, and milk.", "Combine wet and dry ingredients, then gently fold in blueberries.", "Fill muffin cups 3/4 full and bake for 18-20 minutes."]
        }
    ];

    // 2. DOM Elements
    const gridContainer = document.getElementById('recipeGrid');
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModal');

    // 3. RENDER CARDS (Grid mein cards create karna)
    function renderCards() {
        gridContainer.innerHTML = ''; // Clear existing
        recipesData.forEach(recipe => {
            const card = document.createElement('article');
            card.classList.add('recipe-card');
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="card-content">
                    <h3>${recipe.title}</h3>
                    <p class="time">⏱ ${recipe.time}</p>
                    <p>${recipe.desc}</p>
                    <button class="view-btn" onclick="openRecipeModal(${recipe.id})">View Recipe</button>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // 4. MODAL LOGIC (Popup kholna aur data bharna)
    window.openRecipeModal = function (id) {
        const recipe = recipesData.find(r => r.id === id);
        if (!recipe) return;

        const ingredientsHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
        const stepsHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');

        modalBody.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-header-img">
            <h2>${recipe.title}</h2>
            <div class="meta-info">
                <span>⏱ Prep/Cook Time: ${recipe.time}</span>
            </div>
            
            <h3>Ingredients</h3>
            <ul>
                ${ingredientsHTML}
            </ul>

            <h3>Instructions</h3>
            <ol>
                ${stepsHTML}
            </ol>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close Modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => { modalBody.innerHTML = ''; }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 5. INITIALIZE APP
    renderCards();
});