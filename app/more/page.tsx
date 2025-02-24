import { Metadata } from "next";
import StayTuned from "@frontend/components/StayTuned";
import Footer from "@frontend/components/footer/Footer";

export const metadata: Metadata = {
  title: "More",
};

export default function MorePage() {
  return (
    <>
      <StayTuned src={`${process.env.API_MUSIC_AVATAR}`} />
      <Footer />
    </>
  );
}
