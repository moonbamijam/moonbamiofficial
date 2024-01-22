import StayTuned from "@components/StayTuned"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music"
}

const Music = () => {
  return (
    <StayTuned src={`${process.env.REACT_APP_MUSIC_AVATAR}`} />
  )
}

export default Music