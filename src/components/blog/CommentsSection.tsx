"use client";

import type { Comment } from "@/services/generated/model/comment";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import { usePersistedComments } from "@/hooks/usePersistedComments";

interface CommentsSectionProps {
  postId: number;
  comments: Comment[];
}

export default function CommentsSection({
  postId,
  comments,
}: CommentsSectionProps) {
  const { comments: persistedComments, addComment } =
    usePersistedComments(postId);

  const allComments = [...persistedComments, ...comments];

  return (
    <>
      <CommentList comments={allComments} />

      <CommentForm postId={postId} addComment={addComment} />
    </>
  );
}
