import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black dark:bg-gray-950 dark:text-white">
      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Skeleton className="h-5 w-28" />

        {/* Post */}
        <article className="mt-8">
          {/* Title */}
          <div className="space-y-3">
            <Skeleton className="h-10 w-full md:h-12" />
            <Skeleton className="h-10 w-4/5 md:h-12" />
          </div>

          {/* Body */}
          <div className="mt-8 space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-11/12" />
            <Skeleton className="h-5 w-4/5" />
          </div>
        </article>

        {/* Comments */}
        <section className="mt-12">
          <Skeleton className="h-8 w-32" />

          <div className="mt-6 space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl border p-5 dark:border-gray-800"
              >
                <Skeleton className="h-4 w-32" />

                <Skeleton className="mt-3 h-4 w-full" />

                <Skeleton className="mt-2 h-4 w-4/5" />
              </div>
            ))}
          </div>
        </section>

        {/* Comment Form */}
        <section className="mt-12">
          <Skeleton className="h-8 w-40" />

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
