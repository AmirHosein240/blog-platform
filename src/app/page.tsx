import Link from "next/link";

import { getPosts } from "@/services/generated/posts/posts";

import HomePostCard from "@/components/blog/HomePostCard";

export default async function HomePage() {
  const postsResult = await getPosts();

  const posts = postsResult.data ?? [];

  const featuredPosts = posts.slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      {/* Hero Section */}
      <section className="border-b dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              Welcome to MyBlog
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Discover ideas,
              <br />
              stories & knowledge.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Explore interesting articles, discover new ideas, and read stories
              from different authors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/posts"
                className="rounded-lg bg-black px-6 py-3 text-center font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Explore Posts
              </Link>

              <Link
                href="/authors/1"
                className="rounded-lg border border-gray-300 px-6 py-3 text-center font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
              >
                Meet an Author
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Featured
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Latest Articles
              </h2>
            </div>

            <Link
              href="/posts"
              className="text-sm font-semibold text-gray-700 transition hover:text-black hover:underline dark:text-gray-300 dark:hover:text-white"
            >
              View all posts →
            </Link>
          </div>

          {featuredPosts.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <HomePostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-gray-600 dark:text-gray-400">
              No articles available yet.
            </p>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl dark:bg-gray-900">
                📝
              </div>

              <h2 className="mt-5 text-xl font-semibold">Quality Articles</h2>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Read articles covering different topics and perspectives.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl dark:bg-gray-900">
                👨‍💻
              </div>

              <h2 className="mt-5 text-xl font-semibold">Different Authors</h2>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Discover posts from different authors and explore their work.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-2xl dark:bg-gray-900">
                💬
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                Join the Discussion
              </h2>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                Read comments and share your thoughts on interesting articles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
