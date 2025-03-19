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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-4xl font-semibold text-white mb-4">Something went wrong</h2>
        <p className="text-gray-400 text-lg mb-8">
          Don't worry, we're on it. In the meantime, you can:
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block bg-celeste text-white px-8 py-3 rounded-md hover:bg-celeste/80 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="inline-block bg-gray-700 text-white px-8 py-3 rounded-md hover:bg-gray-600 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
} 