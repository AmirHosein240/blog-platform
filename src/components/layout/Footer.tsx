export default function Footer() {
  return (
    <footer className="border-t bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between dark:text-gray-400">
          <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black dark:hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
