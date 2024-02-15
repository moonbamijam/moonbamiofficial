import { Metadata } from "next"

// Components
import StayTuned from "@components/StayTuned"
import Footer from "@components/footer/Footer"

export const metadata: Metadata = {
  title: "Games"
}
const Games = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_GAMES_AVATAR}`} />
      <Footer />
    </>
  )
}

export default Games