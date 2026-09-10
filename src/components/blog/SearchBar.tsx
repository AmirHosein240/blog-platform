"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = useState(currentSearch);

  function handleSearch(value: string) {
    setSearch(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `/posts?${queryString}` : "/posts");
  }

  return (
    <input
      type="text"
      value={search}
      onChange={(event) => handleSearch(event.target.value)}
      placeholder="Search posts..."
      className="w-full rounded-lg border bg-white px-4 py-3 text-black outline-none placeholder:text-gray-400 focus:ring-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
    />
  );
}
