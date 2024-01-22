import StayTuned from "@components/StayTuned"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Games"
}
const Games = () => {
  return (
    <StayTuned src={`${process.env.REACT_APP_GAMES_AVATAR}`} />
  )
}

export default Games