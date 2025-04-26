import { Metadata } from 'next';
import { stripHtml } from '@/utils/strip-html';
import { RecipeDetails } from '@/types/recipes.types';

export function getRecipeMetadata(recipe: RecipeDetails): Metadata {
  if (!recipe) {
    return {} satisfies Metadata;
  }

  return {
    title: `${recipe.title}`,
    description: stripHtml(recipe.summary),
    openGraph: {
      title: `Recipe | ${recipe.title}`,
      description: stripHtml(recipe.summary),
      url: `https://your-site.com/recipes/${recipe.id}`,
      siteName: 'YourSite',
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: recipe.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Recipe | ${recipe.title}`,
      description: stripHtml(recipe.summary),
      images: [recipe.image],
    },
  } satisfies Metadata;
}
