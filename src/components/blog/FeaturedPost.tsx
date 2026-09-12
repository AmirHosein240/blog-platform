import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/services/generated/model/post";

import AuthorBadge from "./AuthorBadge";

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const imageUrl = `https://picsum.photos/seed/featured-post-${post.id}/1600/900`;

  return (
    <article className="mt-8 overflow-hidden rounded-2xl border bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-72 md:min-h-full">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="p-8 md:p-10">
          <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-black">
            Featured Post
          </span>

          <Link href={`/posts/${post.id}`}>
            <h2 className="mt-5 text-3xl font-bold capitalize transition hover:text-gray-600 md:text-4xl dark:hover:text-gray-300">
              {post.title}
            </h2>
          </Link>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {post.body}
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <AuthorBadge authorId={post.userId} />

            <Link
              href={`/posts/${post.id}`}
              className="inline-flex items-center text-sm font-semibold hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
