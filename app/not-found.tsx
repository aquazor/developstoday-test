import Link from 'next/link';
import { paths } from '@/app/paths';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-6">
          <Link
            href={paths.home.getHref()}
            className="inline-block rounded bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
