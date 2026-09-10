"use client";

import { useEffect, useState } from "react";

import type { Comment } from "@/types/comment";

export function usePersistedComments(postId: number) {
  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedComments = localStorage.getItem(`comments-${postId}`);

    if (!storedComments) {
      return [];
    }

    try {
      return JSON.parse(storedComments);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  function addComment(comment: Comment) {
    setComments((currentComments) => [comment, ...currentComments]);
  }

  return {
    comments,
    addComment,
    isLoaded: true,
  };
}
