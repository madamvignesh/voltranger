'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-celeste mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-celeste text-white px-8 py-3 rounded-md hover:bg-celeste/80 transition-colors"
          >
            Go Back Home
          </Link>
          <div className="mt-6 text-gray-500">
            Error Code: 404 | Page Not Found
          </div>
        </div>
      </div>
    </div>
  );
} 