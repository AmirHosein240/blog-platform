"use client";

import { useSyncExternalStore } from "react";

import type { Comment } from "@/services/generated/model/comment";

function getStorageKey(postId: number) {
  return `comments-${postId}`;
}

function getStoredComments(postId: number): Comment[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedComments = localStorage.getItem(getStorageKey(postId));

  if (!storedComments) {
    return [];
  }

  try {
    return JSON.parse(storedComments) as Comment[];
  } catch {
    return [];
  }
}

function subscribe(callback: () => void) {
  const handleStorageChange = () => {
    callback();
  };

  window.addEventListener("storage", handleStorageChange);
  window.addEventListener("comments-updated", handleStorageChange);

  return () => {
    window.removeEventListener("storage", handleStorageChange);
    window.removeEventListener("comments-updated", handleStorageChange);
  };
}

export function usePersistedComments(postId: number) {
  const comments = useSyncExternalStore(
    subscribe,
    () => JSON.stringify(getStoredComments(postId)),
    () => "[]",
  );

  const parsedComments = JSON.parse(comments) as Comment[];

  function addComment(comment: Omit<Comment, "id">) {
    const currentComments = getStoredComments(postId);

    const maxId = currentComments.reduce(
      (max, currentComment) => Math.max(max, currentComment.id),
      0,
    );

    const newComment: Comment = {
      ...comment,
      id: maxId + 1,
    };

    const updatedComments = [newComment, ...currentComments];

    localStorage.setItem(
      getStorageKey(postId),
      JSON.stringify(updatedComments),
    );

    window.dispatchEvent(new Event("comments-updated"));
  }

  return {
    comments: parsedComments,
    addComment,
  };
}
