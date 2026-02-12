export async function get(url: string) {
  const res = await fetch(url);
  if (res.ok) {
    const result = (await res.json()) as unknown;
    return result;
  } else {
    throw new Error('Failed to fetch the data');
  }
}
