import { Metadata } from 'next';

export function getRecipesMetadata(): Metadata {
  return {
    title: 'Recipes - Next-Recipes',
    description: 'Browse a variety of delicious recipes tailored to your taste.',
  } satisfies Metadata;
}
