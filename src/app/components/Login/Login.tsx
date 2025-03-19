'use client';

export default function LoginSection() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-celeste text-center mb-8">Login</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-celeste"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-white mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-celeste"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-celeste focus:ring-celeste border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-celeste hover:text-celeste/80">
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-celeste text-white py-3 px-6 rounded-md hover:bg-celeste/80 transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 