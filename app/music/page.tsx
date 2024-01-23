import StayTuned from "@components/StayTuned"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music"
}

const Music = () => {
  return (
    <StayTuned src={`${process.env.API_MUSIC_AVATAR}`} />
  )
}

export default Music