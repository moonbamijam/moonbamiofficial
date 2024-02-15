import { Url } from "next/dist/shared/lib/router/router"

export type ProjectType = {
  _id?: string
  src: Url,
  projectTitle: string,
  projectDesc: string,
  href: string,
}