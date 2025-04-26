import { Metadata } from 'next';

export function getDeafutlMetadata(): Metadata {
  return {
    title: 'Next-Recipes - Find your favorite recipes!',
    description:
      'Discover and search delicious recipes with Next-Recipes. Powered by Spoonacular API.',
  } satisfies Metadata;
}
