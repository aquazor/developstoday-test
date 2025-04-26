import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getRecipeMetadata } from './_meta';
import { recipesApi } from '@/services/recipes-api';
import { stripHtml } from '@/utils/strip-html';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = await recipesApi.fetchRecipeById(id);
  return getRecipeMetadata(recipe);
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await recipesApi.fetchRecipeById(id);

  if (!data) return notFound();

  return (
    <main className="mx-auto mb-10 max-w-4xl p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-gray-600">
            <span className="inline-flex items-center gap-1">
              🍽️ <strong>Servings:</strong> {data.servings}
            </span>
            <span className="inline-flex items-center gap-1">
              ⏱️ <strong>Ready in:</strong> {data.readyInMinutes} minutes
            </span>
          </div>
        </div>

        {data.image && (
          <Image
            src={data.image}
            alt={data.title}
            width={800}
            height={500}
            className="h-auto w-full rounded-xl object-cover shadow-md"
          />
        )}

        <div className="space-y-6">
          <div className="relative overflow-hidden">
            <input type="checkbox" id="expand" className="peer hidden" />

            <p className="max-h-24 overflow-hidden leading-relaxed text-gray-700 transition-all duration-500 peer-checked:max-h-[1000px]">
              {stripHtml(data.summary)}
            </p>

            <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white to-transparent opacity-80 transition-opacity duration-500 peer-checked:opacity-0" />

            <label
              htmlFor="expand"
              className="relative z-10 mt-2 inline-block cursor-pointer text-sm font-medium text-blue-600 transition-colors peer-checked:hidden hover:underline"
            >
              Read more
            </label>
            <label
              htmlFor="expand"
              className="mt-2 hidden cursor-pointer text-sm font-medium text-blue-600 transition-colors peer-checked:inline-block hover:underline"
            >
              Read less
            </label>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Ingredients</h2>
            <ul className="grid gap-3">
              {data.extendedIngredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 rounded-md bg-gray-50 p-3 text-lg shadow-sm"
                >
                  <div className="text-gray-800">
                    <strong>
                      {ingredient.amount} {ingredient.unit}
                    </strong>
                  </div>
                  <div className="text-gray-600">{ingredient.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
