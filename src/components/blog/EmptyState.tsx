interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="mt-12 rounded-2xl border border-dashed bg-gray-50 p-12 text-center dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-xl font-bold dark:bg-gray-800">
        ?
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>

      <p className="mx-auto mt-3 max-w-md text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}
