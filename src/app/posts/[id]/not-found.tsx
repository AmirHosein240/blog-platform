import Link from "next/link";

export default function PostNotFound() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-6xl">🔎</div>

        <h1 className="mt-6 text-4xl font-bold">Post Not Found</h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Sorry, we could not find the post you are looking for.
        </p>

        <Link
          href="/posts"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Back to Posts
        </Link>
      </div>
    </main>
  );
}
