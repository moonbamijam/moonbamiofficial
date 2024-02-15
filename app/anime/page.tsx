import { Metadata } from "next"

// Components
import StayTuned from "@components/StayTuned"
import Footer from "@components/footer/Footer"

export const metadata: Metadata = {
  title: "Anime"
}

const AnimePage = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_ANIME_AVATAR}`} />
      <Footer />
    </>
  )
}

export default AnimePage