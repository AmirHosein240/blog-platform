import Skeleton from "@/components/ui/Skeleton";

export default function PostCardSkeleton() {
  return (
    <article className="rounded-lg border bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <Skeleton className="h-6 w-3/4" />

      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      <Skeleton className="mt-6 h-4 w-24" />
    </article>
  );
}
