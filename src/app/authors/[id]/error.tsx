"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  console.error(error);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center">
        <div className="w-full max-w-lg rounded-2xl border bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-xl font-bold dark:bg-gray-800">
            !
          </div>

          <h1 className="mt-5 text-2xl font-bold">Something went wrong</h1>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            We could not load this author. Please try again.
          </p>

          <button
            onClick={() => reset()}
            className="mt-6 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
