import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import StayTuned from "@components/StayTuned";
const Footer = dynamic(() => import('@components/footer/Footer'));

export const metadata: Metadata = {
  title: "Timeline"
}
const TimelinePage = () =>{
  return (
    <>
      <StayTuned src={`${process.env.API_HOBBIES_AVATAR}`} />
      <Footer />
    </>
  )
};

export default TimelinePage;