export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  summary: string;
  sourceUrl: string;
  extendedIngredients: {
    id: number;
    name: string;
    original: string;
    amount: number;
    unit: string;
  }[];
}
