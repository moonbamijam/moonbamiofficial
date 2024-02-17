import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import StayTuned from "@components/StayTuned";
const Footer = dynamic(() => import('@components/footer/Footer'));

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
};

export default AnimePage;