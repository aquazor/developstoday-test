import { Metadata } from 'next';
import { Suspense } from 'react';
import { getRecipesMetadata } from './_meta';
import { getUrlSearchParams } from '@/utils/get-url-search-params';
import RecipesLoader from '@/components/recipes/page-loader';
import Recipes from '@/components/recipes/recipes-list';

export const metadata: Metadata = getRecipesMetadata();

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; cuisine?: string; maxReadyTime?: string }>;
}) {
  const params = getUrlSearchParams(await searchParams);

  return (
    <main className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Recipes</h1>
      <Suspense fallback={<RecipesLoader />}>
        <Recipes searchParams={params} />
      </Suspense>
    </main>
  );
}
