"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "newest";

  function handleSort(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", value);
    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `/posts?${queryString}` : "/posts");
  }

  return (
    <select
      value={currentSort}
      onChange={(event) => handleSort(event.target.value)}
      className="rounded-lg border bg-white px-4 py-3 text-black outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="title">Title A-Z</option>
    </select>
  );
}
