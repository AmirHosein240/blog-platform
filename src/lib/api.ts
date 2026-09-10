import type { Author } from "@/types/author";
import type { Comment } from "@/types/comment";
import type { Post } from "@/types/post";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
}

export async function getAuthor(id: string): Promise<Author | null> {
  const response = await fetch(`${API_URL}/users/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch author");
  }

  return response.json();
}

export async function getComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
}
