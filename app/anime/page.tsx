import StayTuned from "@components/StayTuned"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anime"
}

const AnimePage = async () => {
  return (
    <StayTuned src={`${process.env.REACT_APP_ANIME_AVATAR}`} />
  )
}

export default AnimePage