import { Metadata } from "next"

// Components
import StayTuned from "@components/StayTuned"
import Footer from "@components/footer/Footer"

export const metadata: Metadata = {
  title: "Hobbies"
}
const Hobbies = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_HOBBIES_AVATAR}`} />
      <Footer />
    </>
  )
}

export default Hobbies