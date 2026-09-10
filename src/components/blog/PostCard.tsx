import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/types/post";
import AuthorBadge from "./AuthorBadge";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = `https://picsum.photos/seed/post-${post.id}/800/500`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <Link href={`/posts/${post.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-semibold capitalize transition group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
            {post.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-gray-600 dark:text-gray-400">
            {post.body}
          </p>
        </div>
      </Link>

      <div className="mt-auto px-6 pb-6">
        <AuthorBadge authorId={post.userId} />
      </div>
    </article>
  );
}
