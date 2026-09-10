"use client";

interface ErrorProps {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold">Post not available 😕</h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          {error.message || "Failed to load this post"}
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
