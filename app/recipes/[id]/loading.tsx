export default function RecipeLoading() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="animate-pulse">
        <div className="mb-4 h-8 w-3/4 rounded bg-gray-300" />
        <div className="mb-6 h-48 rounded-lg bg-gray-300" />
        <div className="mb-4 flex gap-4 text-gray-700">
          <div className="h-4 w-1/4 rounded bg-gray-300" />
          <div className="h-4 w-1/4 rounded bg-gray-300" />
        </div>
        <div className="mb-8 h-6 w-1/2 rounded bg-gray-300" />
        <h2 className="mb-3 h-4 w-1/4 rounded bg-gray-300"></h2>
        <div className="mb-8 list-inside list-disc">
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-300" />
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-300" />
          <div className="mb-2 h-4 w-3/4 rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
