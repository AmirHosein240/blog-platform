import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Skeleton className="h-4 w-28" />

        {/* Post */}
        <article className="mt-8">
          {/* Title */}
          <Skeleton className="h-10 w-3/4" />

          {/* Body */}
          <div className="mt-6 space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
        </article>

        {/* Comments */}
        <section className="mt-12">
          <Skeleton className="h-7 w-32" />

          <div className="mt-6 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-lg border p-6 dark:border-gray-800"
              >
                <Skeleton className="h-5 w-40" />

                <Skeleton className="mt-2 h-4 w-48" />

                <div className="mt-4 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comment form */}
        <section className="mt-12">
          <Skeleton className="h-7 w-40" />

          <div className="mt-6 space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-32" />
          </div>
        </section>
      </div>
    </main>
  );
}
