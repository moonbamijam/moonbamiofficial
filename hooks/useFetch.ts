export const useFetch = async (url: string) => {
  const response = await fetch(process.env.URL + url, {
    cache: "no-store",
    method: "GET",
  });
  return response.json();
};
