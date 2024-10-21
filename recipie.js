const recipes = {
    breakfast: [
        {
            name: "Scrambled Eggs",
            ingredients: ["eggs", "milk", "butter", "salt"],
            steps: [
                "Beat the eggs with a pinch of salt and milk until well combined.",
                "Melt butter in a non-stick pan over medium heat.",
                "Pour in the egg mixture and stir gently with a spatula until softly set."
            ]
        },
        {
            name: "Pancakes",
            ingredients: ["flour", "eggs", "milk", "sugar", "baking powder"],
            steps: [
                "In a bowl, mix flour, sugar, and baking powder.",
                "In another bowl, whisk together the eggs and milk.",
                "Combine wet and dry ingredients and stir until just combined.",
                "Heat a non-stick pan, pour in batter, and flip when bubbles form."
            ]
        },
        {
            name: "Masala Dosa",
            ingredients: ["rice", "urad dal", "potato", "onion", "spices"],
            steps: [
                "Soak rice and urad dal overnight, then grind to a batter.",
                "Ferment the batter for 8 hours.",
                "Cook boiled potatoes with spices and onion to make filling.",
                "Spread batter on a hot griddle, fill with potato mixture, and fold."
            ]
        },
        {
            name: "Upma",
            ingredients: ["semolina", "onion", "mustard seeds", "vegetables", "water"],
            steps: [
                "Heat oil in a pan and add mustard seeds until they splutter.",
                "Sauté chopped onions and vegetables until soft.",
                "Add semolina and toast for a few minutes.",
                "Pour in water and cook until the mixture thickens."
            ]
        },
        {
            name: "Idli",
            ingredients: ["rice", "urad dal", "salt"],
            steps: [
                "Soak rice and urad dal separately for 6 hours.",
                "Grind to a smooth batter and ferment overnight.",
                "Pour batter into idli molds and steam for 10-15 minutes."
            ]
        }
    ],
    salads: [
        {
            name: "Caesar Salad",
            ingredients: ["lettuce", "croutons", "parmesan", "Caesar dressing"],
            steps: [
                "Wash and chop the lettuce into bite-sized pieces.",
                "In a large bowl, combine the chopped lettuce with croutons and grated parmesan.",
                "Drizzle Caesar dressing over the salad and toss well before serving."
            ]
        },
        {
            name: "Greek Salad",
            ingredients: ["tomato", "cucumber", "feta", "olive", "onion"],
            steps: [
                "Chop the tomatoes, cucumber, and onion into bite-sized pieces.",
                "In a bowl, combine the chopped vegetables with olives and cubed feta.",
                "Drizzle with olive oil, season with salt, and serve chilled."
            ]
        },
        {
            name: "Chickpea Salad",
            ingredients: ["chickpeas", "cucumber", "tomato", "onion", "lemon juice"],
            steps: [
                "Rinse and drain canned chickpeas.",
                "Chop cucumber, tomato, and onion.",
                "Mix all ingredients in a bowl and drizzle with lemon juice."
            ]
        },
        {
            name: "Pasta Salad",
            ingredients: ["pasta", "bell pepper", "olive oil", "basil", "parmesan"],
            steps: [
                "Cook pasta according to package instructions and let cool.",
                "Chop bell peppers and mix with pasta.",
                "Drizzle with olive oil, add basil and grated parmesan, then toss."
            ]
        },
        {
            name: "Fruit Salad",
            ingredients: ["apple", "banana", "orange", "grapes"],
            steps: [
                "Chop all fruits into bite-sized pieces.",
                "Mix in a bowl and serve fresh."
            ]
        }
    ],
    appetizers: [
        {
            name: "Bruschetta",
            ingredients: ["bread", "tomato", "garlic", "basil", "olive oil"],
            steps: [
                "Toast slices of bread until golden brown.",
                "In a bowl, mix chopped tomatoes, minced garlic, and chopped basil with olive oil.",
                "Top each slice of toasted bread with the tomato mixture and serve immediately."
            ]
        },
        {
            name: "Stuffed Mushrooms",
            ingredients: ["mushrooms", "cheese", "breadcrumbs", "garlic"],
            steps: [
                "Preheat the oven to 375°F (190°C).",
                "Remove the stems from the mushrooms and finely chop them.",
                "In a bowl, mix chopped stems with cheese, breadcrumbs, and minced garlic.",
                "Stuff the mushroom caps with the mixture and bake for 20 minutes until golden."
            ]
        },
        {
            name: "Paneer Tikka",
            ingredients: ["paneer", "yogurt", "spices", "bell peppers", "onion"],
            steps: [
                "Marinate paneer and chopped vegetables in yogurt and spices for 30 minutes.",
                "Skewer the paneer and vegetables, and grill or bake until cooked through.",
                "Serve with mint chutney."
            ]
        },
        {
            name: "Aloo Tikki",
            ingredients: ["potato", "peas", "spices", "bread crumbs"],
            steps: [
                "Boil and mash potatoes, then mix with cooked peas and spices.",
                "Form into patties and coat with breadcrumbs.",
                "Fry in hot oil until golden brown and crispy."
            ]
        },
        {
            name: "Samosa",
            ingredients: ["potato", "peas", "flour", "spices"],
            steps: [
                "Make a dough with flour, water, and a pinch of salt; rest for 30 minutes.",
                "Boil and mash potatoes, mix with peas and spices.",
                "Roll out dough, fill with potato mixture, and shape into triangles.",
                "Deep fry until golden brown."
            ]
        }
    ],
    soups: [
        {
            name: "Tomato Soup",
            ingredients: ["tomato", "onion", "garlic", "broth", "cream"],
            steps: [
                "Chop the onion and garlic, then sauté in a pot until softened.",
                "Add chopped tomatoes and broth, then simmer for 20 minutes.",
                "Blend the mixture until smooth, then stir in cream before serving."
            ]
        },
        {
            name: "Chicken Soup",
            ingredients: ["chicken", "carrot", "celery", "onion", "broth"],
            steps: [
                "Sauté diced onions, carrots, and celery in a large pot.",
                "Add the chicken and broth, then bring to a boil.",
                "Simmer until chicken is cooked through, shred the chicken, and serve hot."
            ]
        },
        {
            name: "Lentil Soup",
            ingredients: ["lentils", "carrot", "onion", "celery", "spices"],
            steps: [
                "Rinse lentils and add to a pot with chopped vegetables and spices.",
                "Cover with water and bring to a boil, then reduce heat and simmer until lentils are tender.",
                "Blend if desired and serve warm."
            ]
        },
        {
            name: "Mulligatawny Soup",
            ingredients: ["chicken", "lentils", "curry powder", "coconut milk"],
            steps: [
                "Sauté onions, carrots, and celery in a pot.",
                "Add chicken and lentils, and cover with broth.",
                "Stir in curry powder and coconut milk, and simmer until chicken is cooked."
            ]
        },
        {
            name: "Pumpkin Soup",
            ingredients: ["pumpkin", "onion", "broth", "cream"],
            steps: [
                "Sauté chopped onion until translucent.",
                "Add cubed pumpkin and broth, and simmer until pumpkin is tender.",
                "Blend until smooth and stir in cream before serving."
            ]
        }
    ],
    desserts: [
        {
            name: "Chocolate Cake",
            ingredients: ["flour", "sugar", "cocoa", "butter", "eggs"],
            steps: [
                "Preheat the oven to 350°F (175°C) and grease a cake pan.",
                "Mix flour, sugar, cocoa powder, and baking powder in a bowl.",
                "Add melted butter and eggs, mix until smooth, and pour into the prepared pan.",
                "Bake for 30-35 minutes or until a toothpick comes out clean."
            ]
        },
        {
            name: "Apple Pie",
            ingredients: ["apple", "flour", "butter", "sugar", "cinnamon"],
            steps: [
                "Preheat the oven to 425°F (220°C).",
                "Make the pie crust by mixing flour and butter, then roll it out.",
                "Slice apples and mix with sugar and cinnamon, then fill the crust.",
                "Cover with another crust, cut slits, and bake for 45 minutes until golden."
            ]
        },
        {
            name: "Gulab Jamun",
            ingredients: ["milk powder", "flour", "sugar", "ghee", "rose water"],
            steps: [
                "Mix milk powder, flour, and a pinch of baking soda with water to form a dough.",
                "Shape into small balls and deep fry in ghee until golden.",
                "Soak in sugar syrup flavored with rose water for a few hours before serving."
            ]
        },
        {
            name: "Rasgulla",
            ingredients: ["chhena (paneer)", "sugar", "water", "rose water"],
            steps: [
                "Boil milk and curdle it with lemon juice, then drain and rinse to make chhena.",
                "Knead chhena until smooth, shape into balls, and boil in sugar syrup until they double in size.",
                "Let them cool in the syrup before serving."
            ]
        },
        {
            name: "Kheer",
            ingredients: ["rice", "milk", "sugar", "cardamom", "nuts"],
            steps: [
                "Wash and soak rice for 30 minutes, then boil in milk until soft.",
                "Add sugar and cardamom, and cook until thickened.",
                "Garnish with chopped nuts and serve chilled or warm."
            ]
        }
    ],
    "main-dishes": [
        {
            name: "Spaghetti Bolognese",
            ingredients: ["spaghetti", "ground beef", "tomato", "onion", "garlic"],
            steps: [
                "Cook the spaghetti according to package instructions.",
                "In a pan, sauté chopped onion and garlic until softened.",
                "Add ground beef and cook until browned, then stir in chopped tomatoes and simmer for 20 minutes.",
                "Serve sauce over spaghetti."
            ]
        },
        {
            name: "Grilled Chicken",
            ingredients: ["chicken", "lemon", "garlic", "olive oil", "herbs"],
            steps: [
                "Marinate chicken in lemon juice, minced garlic, olive oil, and herbs for at least 30 minutes.",
                "Preheat the grill and cook chicken for 6-7 minutes on each side until fully cooked."
            ]
        },
        {
            name: "Palak Paneer",
            ingredients: ["spinach", "paneer", "onion", "tomato", "spices"],
            steps: [
                "Blanch spinach and blend it to a smooth puree.",
                "Sauté chopped onions and tomatoes with spices until soft.",
                "Add spinach puree and cubed paneer, and cook until heated through."
            ]
        },
        {
            name: "Aloo Gobi",
            ingredients: ["potato", "cauliflower", "onion", "spices"],
            steps: [
                "Chop potatoes and cauliflower into bite-sized pieces.",
                "Sauté onions until golden, then add spices.",
                "Add potatoes and cauliflower, cover, and cook until tender."
            ]
        },
        {
            name: "Chole Bhature",
            ingredients: ["chickpeas", "flour", "yogurt", "onion", "spices"],
            steps: [
                "Soak chickpeas overnight and cook until tender.",
                "Make a dough with flour, yogurt, and water; roll into circles.",
                "Deep fry until golden brown and serve with spicy chickpeas."
            ]
        }
    ],
    juices: [
        {
            name: "Masala Chai",
            ingredients: ["water", "tea leaves", "milk", "spices", "sugar"],
            steps: [
                "Boil water and add tea leaves along with spices.",
                "Simmer for 5 minutes, then add milk and sugar to taste.",
                "Bring to a boil and strain before serving hot."
            ]
        },
        {
            name: "Lassi",
            ingredients: ["yogurt", "water", "sugar", "cardamom"],
            steps: [
                "Blend yogurt with water, sugar, and a pinch of cardamom until smooth.",
                "Serve chilled, garnished with a sprinkle of cardamom or mint."
            ]
        },
        {
            name: "Filter Coffee",
            ingredients: ["coffee powder", "water", "milk", "sugar"],
            steps: [
                "Boil water and pour it over coffee powder in a filter.",
                "Allow the coffee to drip into a vessel below.",
                "Mix the brewed coffee with hot milk and sugar to taste."
            ]
        },
        {
            name: "Sweet Coconut Water",
            ingredients: ["coconut water", "sugar", "lime juice"],
            steps: [
                "Mix coconut water with sugar and a squeeze of lime juice.",
                "Stir until sugar dissolves and serve chilled."
            ]
        },
        {
            name: "Aam Panna",
            ingredients: ["raw mango", "sugar", "cumin powder", "mint leaves"],
            steps: [
                "Boil raw mango until soft, then peel and mash.",
                "Mix with sugar, cumin powder, and water to form a drink.",
                "Garnish with mint leaves and serve chilled."
            ]
        }
    ],
    snacks: [
        {
            name: "Popcorn",
            ingredients: ["corn kernels", "butter", "salt"],
            steps: [
                "Heat the kernels in a pot until popped.",
                "Melt butter and drizzle over popcorn.",
                "Add salt to taste."
            ]
        },
        {
            name: "Fruit Salad",
            ingredients: ["apple", "banana", "orange", "grapes"],
            steps: [
                "Chop all fruits into bite-sized pieces.",
                "Mix in a bowl and serve fresh."
            ]
        },
        {
            name: "Pani Puri",
            ingredients: ["semolina", "potatoes", "chickpeas", "spices", "pani"],
            steps: [
                "Make puris by mixing semolina with water and frying until puffed.",
                "Prepare a filling with boiled potatoes, chickpeas, and spices.",
                "Serve puris filled with spicy water (pani) and enjoy."
            ]
        },
        {
            name: "Dhokla",
            ingredients: ["chickpea flour", "yogurt", "spices"],
            steps: [
                "Mix chickpea flour with yogurt and water to make a batter.",
                "Add spices and steam for 20 minutes.",
                "Cut into pieces and serve with chutney."
            ]
        },
        {
            name: "Samosa",
            ingredients: ["potato", "peas", "flour", "spices"],
            steps: [
                "Make a dough with flour, water, and a pinch of salt; rest for 30 minutes.",
                "Boil and mash potatoes, mix with peas and spices.",
                "Roll out dough, fill with potato mixture, and shape into triangles.",
                "Deep fry until golden brown."
            ]
        }
    ]
};