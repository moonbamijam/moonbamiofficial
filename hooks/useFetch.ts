import { Url } from "next/dist/shared/lib/router/router"

export const useFetch = async (url: Url) => {
  try {
    const response = await fetch(`${ url }`, {
    })

    if(!response.ok) {
      throw new Error("Failed fetching!")
    }
    return response.json()
  } catch (error) {
    console.log("Error occured: ", error)
  }
}