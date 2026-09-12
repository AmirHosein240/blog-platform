import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back Link */}
        <Skeleton className="h-5 w-28" />

        {/* Author Information */}
        <section className="mt-8 overflow-hidden rounded-2xl border bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
          <div className="p-8 md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              {/* Avatar */}
              <Skeleton className="h-24 w-24 shrink-0 rounded-full" />

              <div className="flex-1">
                {/* Label */}
                <Skeleton className="h-4 w-20" />

                {/* Name */}
                <Skeleton className="mt-3 h-10 w-64" />

                {/* Username */}
                <Skeleton className="mt-3 h-5 w-32" />

                {/* Author Details */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="mt-3 h-5 w-40" />
                  </div>

                  <div className="rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="mt-3 h-5 w-40" />
                  </div>

                  <div className="rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="mt-3 h-5 w-44" />
                  </div>

                  <div className="rounded-xl border bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="mt-3 h-5 w-36" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Header */}
        <section className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="mt-3 h-8 w-64" />
            </div>

            <Skeleton className="h-5 w-20" />
          </div>

          {/* Posts */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <Skeleton className="h-6 w-3/4" />

                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-2/3" />
                </div>

                <Skeleton className="mt-6 h-10 w-40" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
