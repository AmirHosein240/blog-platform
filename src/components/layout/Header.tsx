"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const isHomeActive = pathname === "/";
  const isPostsActive = pathname.startsWith("/posts");

  return (
    <header className="border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-gray-900 transition hover:opacity-80 dark:text-white"
          >
            MyBlog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                isHomeActive
                  ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/posts"
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                isPostsActive
                  ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              Posts
            </Link>

            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t py-4 dark:border-gray-800 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMenu}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isHomeActive
                    ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                Home
              </Link>

              <Link
                href="/posts"
                onClick={closeMenu}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isPostsActive
                    ? "bg-gray-100 text-black dark:bg-gray-800 dark:text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                Posts
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
