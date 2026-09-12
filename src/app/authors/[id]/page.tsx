import type { Metadata } from "next";

import Link from "next/link";

import { notFound } from "next/navigation";

import { getPosts } from "@/services/generated/posts/posts";
import { getAuthor } from "@/services/generated/users/users";

import PostCard from "@/components/blog/PostCard";

interface AuthorPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const { id } = await params;

  const authorId = Number(id);

  const result = await getAuthor(authorId);
  const author = result.data;

  if (!author) {
    return {
      title: "Author Not Found",
      description: "The requested author could not be found.",
    };
  }

  return {
    title: author.name,
    description: `Read articles written by ${author.name}.`,
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { id } = await params;

  const authorId = Number(id);

  const authorResult = await getAuthor(authorId);
  const author = authorResult.data;

  if (!author) {
    notFound();
  }

  const postsResult = await getPosts();
  const posts = postsResult.data;

  const authorPosts = posts.filter((post) => post.userId === author.id);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/posts"
          className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          ← Back to Posts
        </Link>

        <section className="mt-8 rounded-lg border bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          <h1 className="text-3xl font-bold">{author.name}</h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            @{author.username}
          </p>

          <div className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <span className="font-medium">Email:</span> {author.email}
            </p>

            <p>
              <span className="font-medium">Phone:</span> {author.phone}
            </p>

            <p>
              <span className="font-medium">Website:</span> {author.website}
            </p>

            <p>
              <span className="font-medium">Company:</span>{" "}
              {author.company.name}
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Posts by {author.name}</h2>

          {authorPosts.length === 0 ? (
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              This author has no posts.
            </p>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {authorPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
