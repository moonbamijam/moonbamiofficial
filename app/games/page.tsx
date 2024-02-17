import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import StayTuned from "@components/StayTuned";
const Footer = dynamic(() => import('@components/footer/Footer'));

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
};

export default Games;