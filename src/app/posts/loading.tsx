import PostCardSkeleton from "@/components/blog/PostCardSkeleton";
import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Page title */}
        <Skeleton className="h-10 w-32" />

        {/* Search + Sort */}
        <div className="mt-6 flex gap-4">
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-32" />
        </div>

        {/* Description */}
        <Skeleton className="mt-4 h-5 w-24" />

        {/* Post cards */}
        <div className="mt-8 space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
