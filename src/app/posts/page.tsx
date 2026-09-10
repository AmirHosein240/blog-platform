import { getPosts } from "@/lib/api";
import type { Metadata } from "next";

import PostCard from "@/components/blog/PostCard";
import SearchBar from "@/components/blog/SearchBar";
import SortDropdown from "@/components/blog/SortDropdown";
import Pagination from "@/components/blog/Pagination";
import EmptyState from "@/components/blog/EmptyState";
import FeaturedPost from "@/components/blog/FeaturedPost";

interface PostsPageProps {
  searchParams: Promise<{
    search?: string;
    sort?: string;
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Posts",
  description: "Browse and discover articles from different authors.",
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const params = await searchParams;

  const search = params.search ?? "";
  const sort = params.sort ?? "newest";
  const page = Number(params.page ?? "1");

  const posts = await getPosts();

  let filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (sort === "oldest") {
    filteredPosts = [...filteredPosts].reverse();
  }

  if (sort === "title") {
    filteredPosts = [...filteredPosts].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  const postsPerPage = 10;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  );

  const featuredPost = paginatedPosts[0];

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Posts</h1>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Browse all blog posts
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <SearchBar />
          </div>

          <SortDropdown />
        </div>

        {paginatedPosts.length === 0 ? (
          <EmptyState
            title="No posts found"
            description="Try changing your search keywords."
          />
        ) : (
          <>
            {featuredPost && <FeaturedPost post={featuredPost} />}

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

        <Pagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  );
}
