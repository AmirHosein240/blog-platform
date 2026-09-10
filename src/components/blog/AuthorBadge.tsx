import Link from "next/link";

import { getAuthor } from "@/lib/api";

interface AuthorBadgeProps {
  authorId: number;
}

export default async function AuthorBadge({ authorId }: AuthorBadgeProps) {
  const author = await getAuthor(String(authorId));

  if (!author) {
    return null;
  }

  const initial = author.name.charAt(0).toUpperCase();

  return (
    <Link href={`/authors/${author.id}`} className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold dark:bg-gray-800">
        {initial}
      </div>

      <div>
        <p className="text-sm font-medium">{author.name}</p>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          @{author.username}
        </p>
      </div>
    </Link>
  );
}
