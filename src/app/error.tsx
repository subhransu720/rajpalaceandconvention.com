'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 