"use client";

import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold dark:text-white"
          >
            MyBlog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-gray-700 transition hover:text-black dark:text-gray-200 dark:hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/posts"
              className="text-gray-700 transition hover:text-black dark:text-gray-200 dark:hover:text-white"
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
              className="rounded-md border px-3 py-2 text-sm dark:border-gray-700"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t py-4 md:hidden dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-gray-700 dark:text-gray-200"
              >
                Home
              </Link>

              <Link
                href="/posts"
                onClick={closeMenu}
                className="text-gray-700 dark:text-gray-200"
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
