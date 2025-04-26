export default function RecipesLoader() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="animate-pulse rounded-md border p-4">
            <div className="mb-4 h-48 rounded bg-gray-300"></div>
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="h-4 w-1/2 rounded bg-gray-300"></div>
          </div>
        ))}
    </div>
  );
}
