import PostCardSkeleton from "@/components/blog/PostCardSkeleton";

import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <Skeleton className="h-10 w-32" />

        <Skeleton className="mt-3 h-5 w-56" />

        {/* Search + Sort */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Skeleton className="h-12 flex-1" />

          <Skeleton className="h-12 w-full md:w-32" />
        </div>

        {/* Featured Post */}
        <div className="mt-8 overflow-hidden rounded-2xl border dark:border-gray-800">
          <div className="grid md:grid-cols-2">
            <Skeleton className="min-h-72 rounded-none md:min-h-full" />

            <div className="space-y-5 p-8 md:p-10">
              <Skeleton className="h-6 w-32 rounded-full" />

              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-4/5" />

              <div className="space-y-3">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-5 w-4/5" />
              </div>

              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>

        {/* All Posts */}
        <section className="mt-12">
          <Skeleton className="h-8 w-32" />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
