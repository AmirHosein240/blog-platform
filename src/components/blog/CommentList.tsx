import type { Comment } from "@/types/comment";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Comments</h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          No comments yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Comments ({comments.length})</h2>

      <div className="mt-6 space-y-4">
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="rounded-lg border bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="font-semibold">{comment.name}</h3>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {comment.email}
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {comment.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
