import Link from "next/link";

import { getPosts } from "@/lib/api";
import HomePostCard from "@/components/blog/HomePostCard";

export default async function HomePage() {
  const posts = await getPosts();

  const featuredPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      <section className="border-b dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
              Welcome to MyBlog
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
              Discover ideas,
              <br />
              stories & knowledge.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Explore interesting articles, discover new ideas, and read stories
              from different authors.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/posts"
                className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Explore Posts
              </Link>

              <Link
                href="/authors/1"
                className="rounded-lg border px-6 py-3 text-center font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Meet an Author
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold">Latest Articles</h2>
            </div>

            <Link
              href="/posts"
              className="text-sm font-semibold hover:underline"
            >
              View all posts →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <HomePostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="text-3xl">📝</div>

              <h2 className="mt-4 text-xl font-semibold">Quality Articles</h2>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Read articles covering different topics and perspectives.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="text-3xl">👨‍💻</div>

              <h2 className="mt-4 text-xl font-semibold">Different Authors</h2>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Discover posts from different authors and explore their work.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <div className="text-3xl">💬</div>

              <h2 className="mt-4 text-xl font-semibold">
                Join the Discussion
              </h2>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Read comments and share your thoughts on interesting articles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
