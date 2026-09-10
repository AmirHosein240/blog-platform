"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  }

  if (totalPages <= 1) {
    return null;
  }

  const mobileStartPage = Math.floor((currentPage - 1) / 3) * 3 + 1;

  const mobileEndPage = Math.min(mobileStartPage + 2, totalPages);

  const mobilePages = Array.from(
    { length: mobileEndPage - mobileStartPage + 1 },
    (_, index) => mobileStartPage + index,
  );

  return (
    <div className="mt-8 flex items-center justify-center gap-2 px-2">
      {/* Previous */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800 sm:px-4"
      >
        Previous
      </button>

      {/* Mobile: only 3 pages */}
      <div className="flex items-center gap-2 md:hidden">
        {mobilePages.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`min-w-10 rounded-md border px-3 py-2 ${
              currentPage === page
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Desktop: all pages */}
      <div className="hidden items-center gap-2 md:flex">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`min-w-10 rounded-md border px-3 py-2 ${
                currentPage === page
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:hover:bg-gray-800 sm:px-4"
      >
        Next
      </button>
    </div>
  );
}
