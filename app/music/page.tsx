import { Metadata } from "next"

// Components
import StayTuned from "@components/StayTuned"
import Footer from "@components/footer/Footer"

export const metadata: Metadata = {
  title: "Music"
}

const Music = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_MUSIC_AVATAR}`} />
      <Footer />
    </>
  )
}

export default Music