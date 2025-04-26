import Link from 'next/link';
import Image from 'next/image';
import { Recipe } from '@/types/recipes.types';
import { paths } from '@/app/paths';

export default function RecipeItem({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      key={recipe.id}
      href={paths.recipe.getHref(recipe.id)}
      className="group border bg-white p-3 shadow-sm transition hover:shadow-md"
    >
      <div className="relative mb-3 h-48 w-full overflow-hidden rounded-md">
        <Image
          src={recipe.image}
          alt={recipe.title}
          quality={100}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h2 className="line-clamp-2 text-center text-sm font-semibold text-gray-800 group-hover:text-black">
        {recipe.title}
      </h2>
    </Link>
  );
}
