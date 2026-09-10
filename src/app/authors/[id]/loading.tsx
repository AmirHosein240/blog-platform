import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back link */}
        <Skeleton className="h-4 w-28" />

        {/* Author information */}
        <section className="mt-8 rounded-lg border bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
          {/* Author name */}
          <Skeleton className="h-9 w-56" />

          {/* Username */}
          <Skeleton className="mt-3 h-5 w-32" />

          {/* Author details */}
          <div className="mt-6 space-y-3">
            <Skeleton className="h-5 w-72" />
            <Skeleton className="h-5 w-64" />
            <Skeleton className="h-5 w-56" />
            <Skeleton className="h-5 w-60" />
          </div>
        </section>

        {/* Posts title */}
        <Skeleton className="mt-12 h-8 w-64" />

        {/* Posts */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <Skeleton className="h-6 w-3/4" />

              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
              </div>

              <Skeleton className="mt-6 h-4 w-24" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
