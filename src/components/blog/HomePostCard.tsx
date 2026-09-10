import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/types/post";

interface HomePostCardProps {
  post: Post;
}

export default function HomePostCard({ post }: HomePostCardProps) {
  const imageUrl = `https://picsum.photos/seed/post-${post.id}/800/500`;

  return (
    <article className="group overflow-hidden rounded-xl border bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
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
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Article #{post.id}
          </span>

          <h3 className="mt-3 text-xl font-semibold capitalize transition group-hover:text-gray-600 dark:group-hover:text-gray-300">
            {post.title}
          </h3>

          <p className="mt-3 line-clamp-3 leading-7 text-gray-600 dark:text-gray-400">
            {post.body}
          </p>

          <span className="mt-5 inline-block text-sm font-semibold">
            Read article →
          </span>
        </div>
      </Link>
    </article>
  );
}
