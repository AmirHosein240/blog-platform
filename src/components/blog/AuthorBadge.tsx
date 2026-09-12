"use client";

import Link from "next/link";

import { useGetAuthor } from "@/services/generated/users/users";

interface AuthorBadgeProps {
  authorId: number;
}

export default function AuthorBadge({ authorId }: AuthorBadgeProps) {
  const { data, isLoading, error } = useGetAuthor(authorId);

  if (isLoading) {
    return (
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />

        <div>
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="mt-2 h-3 w-16 rounded bg-gray-200 dark:bg-gray-800" />
        </div>
      </div>
    );
  }

  if (error || !data?.data) {
    return null;
  }

  const author = data.data;

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
