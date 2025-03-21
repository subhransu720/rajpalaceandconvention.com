'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="max-w-xl p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Something went wrong!
            </h1>
            <button
              onClick={() => reset()}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 