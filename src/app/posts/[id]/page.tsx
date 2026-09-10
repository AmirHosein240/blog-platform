import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getComments, getPost } from "@/lib/api";
import CommentsSection from "@/components/blog/CommentsSection";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { id } = await params;

  const post = await getPost(id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  const comments = await getComments(id);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/posts"
          className="text-sm text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          ← Back to Posts
        </Link>

        <article className="mt-8">
          <h1 className="text-4xl font-bold capitalize">{post.title}</h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {post.body}
          </p>
        </article>

        <CommentsSection postId={post.id} comments={comments} />
      </div>
    </main>
  );
}
