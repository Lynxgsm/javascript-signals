export default async function fetcher<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (response.ok) {
    return (await response.json()) as T;
  }

  throw new Error("Couldn't fetch " + url);
}
