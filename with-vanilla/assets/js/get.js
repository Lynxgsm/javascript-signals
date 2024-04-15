export async function getJokes(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }

    throw new Error("Couldn't fetch " + url);
  } catch (error) {
    return error;
  }
}
