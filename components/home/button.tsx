'use client';

import { useFormStatus } from 'react-dom';

export default function Button({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={disabled || pending}
      className="flex w-full items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      type="submit"
    >
      Search{' '}
      {pending && (
        <div className="size-4 animate-spin rounded-xl border-t-2 border-b-2 border-white"></div>
      )}
    </button>
  );
}
