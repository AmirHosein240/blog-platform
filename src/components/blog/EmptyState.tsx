interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="mt-12 rounded-lg border border-dashed bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-3 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
