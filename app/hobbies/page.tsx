import StayTuned from "@components/StayTuned"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hobbies"
}
const Hobbies = () => {
  return (
    <StayTuned src={`${process.env.API_HOBBIES_AVATAR}`} />
  )
}

export default Hobbies