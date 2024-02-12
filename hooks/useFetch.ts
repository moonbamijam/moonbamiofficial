export const useFetch = async (url: string) => {
  try {
    const response = await fetch(process.env.URL + url , {
      cache: 'no-store',
      method: 'GET'
    });
    const data = await response.json();
    return await data;

  } catch (error) {
    console.log("Error occured: ", error);
  }
};