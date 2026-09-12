"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Post } from "@/services/generated/model/post";

import PostCard from "@/components/blog/PostCard";
import SearchBar from "@/components/blog/SearchBar";
import SortDropdown from "@/components/blog/SortDropdown";
import Pagination from "@/components/blog/Pagination";
import FeaturedPost from "@/components/blog/FeaturedPost";
import EmptyState from "@/components/blog/EmptyState";

interface PostsClientProps {
  posts: Post[];
}

export default function PostsClient({ posts }: PostsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "newest";

  const pageParam = Number(searchParams.get("page"));

  const page = Number.isInteger(pageParam) && pageParam > 0 ? pageParam : 1;

  const filteredAndSortedPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let result = posts;

    // Search
    if (normalizedSearch) {
      result = result.filter((post) =>
        post.title.toLowerCase().includes(normalizedSearch),
      );
    }

    // Sort
    if (sort === "oldest") {
      result = [...result].reverse();
    }

    if (sort === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [posts, search, sort]);

  // Pagination
  const postsPerPage = 10;

  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    return filteredAndSortedPosts.slice(startIndex, endIndex);
  }, [filteredAndSortedPosts, page]);

  function handleSearchChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    // وقتی Search تغییر می‌کند، برگرد به صفحه اول
    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }

  function handleSortChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "newest") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    // وقتی Sort تغییر می‌کند، برگرد به صفحه اول
    params.delete("page");

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(newPage));
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  const featuredPost = paginatedPosts[0];

  return (
    <section className="mt-8">
      {/* Search + Sort */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <SearchBar value={search} onChange={handleSearchChange} />
        </div>

        <SortDropdown value={sort} onChange={handleSortChange} />
      </div>

      {/* Empty State */}
      {paginatedPosts.length === 0 ? (
        <EmptyState
          title="No posts found"
          description="Try changing your search keywords."
        />
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && <FeaturedPost post={featuredPost} />}

          {/* All Posts */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">All Posts</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {paginatedPosts.slice(1).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
