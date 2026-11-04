# NextBites 🍽️

A small recipe site built with **Next.js (App Router)** and **TypeScript**.
This is Part 1 of the NextBites project: repo setup and a data-driven home page.

## Features

- Typed `Recipe` model and recipe data in a single source file
- Reusable, typed `RecipeCard` component
- Shared `NavBar` rendered once in the root layout
- Home page that maps recipes into a responsive CSS grid
- Live search (client component) with an empty-state message
- Dynamic route `/recipe/[id]` with ingredients and steps for every recipe

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- TypeScript
- ESLint

## Getting started

```bash
git clone https://github.com/devacharan-cu/nextbites.git
cd nextbites
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Lint the code with ESLint    |

## Project structure

```
app/
├── components/
│   ├── NavBar.tsx       # shared navigation bar
│   ├── RecipeCard.tsx   # typed card, links to /recipe/[id]
│   └── RecipeGrid.tsx   # client component: search + grid
├── data/
│   └── recipes.ts       # Recipe type, recipes array, getRecipe()
├── globals.css          # global styles and responsive grid
├── layout.tsx           # root layout (NavBar + {children})
├── recipe/[id]/page.tsx # dynamic detail page
└── page.tsx             # home page: renders RecipeGrid
```

## How it works

1. `app/data/recipes.ts` exports the `Recipe` type and the `recipes` array.
2. `RecipeCard` takes one typed `recipe` prop and renders its fields.
3. `app/page.tsx` maps every recipe to a `<RecipeCard key={recipe.id} />`.
4. The grid uses `repeat(auto-fill, minmax(230px, 1fr))`, so it reflows from one column on phones to several on desktops.

## Roadmap

- **Part 2 (done):** search and dynamic recipe detail pages
- **Part 3:** deployment
