export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "chicken-tacos", title: "Chicken Tacos", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican" },
  { id: "veg-sushi-rolls", title: "Veggie Sushi Rolls", emoji: "🍣", minutes: 50, difficulty: "Hard", cuisine: "Japanese" },
  { id: "butter-chicken", title: "Butter Chicken", emoji: "🍛", minutes: 45, difficulty: "Medium", cuisine: "Indian" },
  { id: "caesar-salad", title: "Caesar Salad", emoji: "🥗", minutes: 15, difficulty: "Easy", cuisine: "American" },
  { id: "beef-burger", title: "Classic Beef Burger", emoji: "🍔", minutes: 30, difficulty: "Easy", cuisine: "American" },
  { id: "pad-thai", title: "Pad Thai", emoji: "🍜", minutes: 40, difficulty: "Medium", cuisine: "Thai" },
  { id: "chocolate-lava-cake", title: "Chocolate Lava Cake", emoji: "🍰", minutes: 30, difficulty: "Hard", cuisine: "French" },
];
