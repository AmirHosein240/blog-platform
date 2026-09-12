import type { Metadata } from "next";

import { getPosts } from "@/services/generated/posts/posts";

import PostsClient from "@/components/blog/PostsClient";

export const metadata: Metadata = {
  title: "Posts",
  description: "Browse and discover articles from different authors.",
};

export default async function PostsPage() {
  const postsResult = await getPosts();

  const posts = postsResult.data ?? [];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Explore
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            All Posts
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Browse and discover articles from different authors.
          </p>
        </div>

        <div className="mt-10">
          <PostsClient posts={posts} />
        </div>
      </div>
    </main>
  );
}
