export const useFetch = async (url: string) => {
  const response = await fetch(process.env.URL + `${ url }`, {
    cache: 'no-store',
    method: 'GET'
  });

  if(!response.ok) throw new Error("Failed to fetch");

  return await response.json();
};