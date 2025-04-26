import { notFound } from 'next/navigation';
import { recipesApi } from '@/services/recipes-api';
import RecipeItem from './recipe-item';

export default async function RecipesList({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const recipes = await recipesApi.fetchRecipes(searchParams);

  if (!recipes) return notFound();

  if (!recipes.length) {
    return <p className="text-center text-gray-600">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
