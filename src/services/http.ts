export const API_URL = "https://jsonplaceholder.typicode.com";

export async function customFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
  });

  const body = [204, 205, 304].includes(response.status)
    ? null
    : await response.text();

  const data = body ? JSON.parse(body) : null;

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return {
    data,
    status: response.status,
    headers: response.headers,
  } as T;
}
