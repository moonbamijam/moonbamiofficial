// export const useFetch = async (url: string) => {
//   try {
//     const response = await fetch(process.env.URL + `${ url }`, {
//       cache: 'no-store',
//       method: 'GET'
//     });

//     if(!response.ok) throw new Error("Failed to fetch");
  
//     return await response.json();

//   } catch (error) {
//     console.log("Error occured: ", error);
//   }
// };