export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Fresh basil", "Olive oil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add torn mozzarella.",
      "Bake hot until the crust blisters.",
      "Top with basil and a drizzle of olive oil.",
    ],
  },
  {
    id: "chicken-tacos",
    title: "Chicken Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Chicken thighs", "Taco seasoning", "Corn tortillas", "Onion", "Cilantro", "Lime"],
    steps: [
      "Season the chicken with taco seasoning.",
      "Pan-fry until cooked through, then slice.",
      "Warm the tortillas on a dry pan.",
      "Fill with chicken, onion and cilantro, then squeeze lime over.",
    ],
  },
  {
    id: "veg-sushi-rolls",
    title: "Veggie Sushi Rolls",
    emoji: "🍣",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Japanese",
    ingredients: ["Sushi rice", "Nori sheets", "Cucumber", "Avocado", "Carrot", "Rice vinegar"],
    steps: [
      "Cook the rice and season it with rice vinegar.",
      "Lay a nori sheet on a bamboo mat and spread rice over it.",
      "Add cucumber, avocado and carrot in a line.",
      "Roll tightly, then slice into bite-size pieces.",
    ],
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    emoji: "🍛",
    minutes: 45,
    difficulty: "Medium",
    cuisine: "Indian",
    ingredients: ["Chicken", "Yogurt", "Tomato puree", "Butter", "Cream", "Garam masala", "Ginger-garlic paste"],
    steps: [
      "Marinate the chicken in yogurt and spices.",
      "Grill or pan-sear the chicken.",
      "Simmer tomato puree with butter and ginger-garlic paste.",
      "Add the chicken and cream, then simmer until thick.",
    ],
  },
  {
    id: "caesar-salad",
    title: "Caesar Salad",
    emoji: "🥗",
    minutes: 15,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing", "Lemon"],
    steps: [
      "Chop the romaine and add it to a large bowl.",
      "Toss with Caesar dressing and a squeeze of lemon.",
      "Top with croutons and shaved Parmesan.",
    ],
  },
  {
    id: "beef-burger",
    title: "Classic Beef Burger",
    emoji: "🍔",
    minutes: 30,
    difficulty: "Easy",
    cuisine: "American",
    ingredients: ["Ground beef", "Burger buns", "Cheddar", "Lettuce", "Tomato", "Pickles"],
    steps: [
      "Shape the beef into patties and season well.",
      "Grill or pan-fry for about 4 minutes per side.",
      "Melt cheddar on top in the last minute.",
      "Toast the buns and assemble with the toppings.",
    ],
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Thai",
    ingredients: ["Rice noodles", "Shrimp or tofu", "Eggs", "Bean sprouts", "Peanuts", "Tamarind sauce", "Lime"],
    steps: [
      "Soak the rice noodles until pliable.",
      "Stir-fry the shrimp or tofu, then scramble in the eggs.",
      "Add the noodles and tamarind sauce and toss.",
      "Finish with bean sprouts, crushed peanuts and lime.",
    ],
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    emoji: "🍰",
    minutes: 30,
    difficulty: "Hard",
    cuisine: "French",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour"],
    steps: [
      "Melt the chocolate and butter together.",
      "Whisk in the eggs and sugar, then fold in the flour.",
      "Pour into greased ramekins.",
      "Bake until the edges are set but the centre is still soft, then serve at once.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
