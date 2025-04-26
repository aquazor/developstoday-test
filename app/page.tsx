import { Metadata } from 'next';
import Form from '@/components/home/form';
import { getDeafutlMetadata } from './_meta';

export const metadata: Metadata = getDeafutlMetadata();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Find Your Perfect Recipe
        </h1>
        <Form />
      </div>
    </main>
  );
}
