"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { Comment } from "@/services/generated/model/comment";

interface CommentFormProps {
  postId: number;
  addComment: (comment: Omit<Comment, "id">) => void;
}

const commentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  body: z.string().min(10, "Comment must be at least 10 characters"),
});

type CommentFormData = z.infer<typeof commentSchema>;

export default function CommentForm({ postId, addComment }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  function onSubmit(data: CommentFormData) {
    const newComment: Omit<Comment, "id"> = {
      postId,
      name: data.name,
      email: data.email,
      body: data.body,
    };

    addComment(newComment);
    reset();
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Add a Comment</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>

          <input
            type="text"
            {...register("name")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            placeholder="Your name"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>

          <input
            type="email"
            {...register("email")}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            placeholder="you@example.com"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label className="mb-2 block text-sm font-medium">Comment</label>

          <textarea
            {...register("body")}
            rows={5}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
            placeholder="Write your comment..."
          />

          {errors.body && (
            <p className="mt-1 text-sm text-red-500">{errors.body.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </button>
      </form>
    </section>
  );
}
