'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="mt-5 flex justify-center">
      <div className="flex flex-col gap-2">
        <p className="border p-1 text-lg text-rose-400">{error.message}</p>
        <button className="mx-auto max-w-40 border px-2 py-2 font-bold" onClick={reload}>
          Refresh
        </button>
      </div>
    </div>
  );
}
