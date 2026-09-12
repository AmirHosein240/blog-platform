"use client";

import { useEffect, useRef, useState } from "react";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "title", label: "Title A-Z" },
];

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleOptionClick(optionValue: string) {
    onChange(optionValue);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative w-full md:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg border bg-white px-4 py-3 text-black outline-none transition hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-700 md:min-w-[150px]"
      >
        <span>{selectedOption.label}</span>

        <span
          className={`ml-4 text-sm transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-lg border bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 md:min-w-[150px]"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => handleOptionClick(option.value)}
              className={`block w-full px-4 py-3 text-left text-sm transition ${
                option.value === value
                  ? "bg-gray-100 font-semibold dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
