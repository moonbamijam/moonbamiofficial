import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import StayTuned from "@components/StayTuned";
const Footer = dynamic(() => import('@components/footer/Footer'));

export const metadata: Metadata = {
  title: "More"
}

const MorePage = () => {
  return (
    <>
      <StayTuned src={`${process.env.API_MUSIC_AVATAR}`} />
      <Footer />
    </>
  )
};

export default MorePage;