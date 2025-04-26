import { Recipe, RecipeDetails } from '@/app/types/recipes.types';

async function fetchRecipeById(id: string) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return (await res.json()) as RecipeDetails;
}

async function fetchRecipes(params: URLSearchParams) {
  const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await res.json();
  return data.results as Recipe[];
}

export const recipesApi = {
  fetchRecipes,
  fetchRecipeById,
};
