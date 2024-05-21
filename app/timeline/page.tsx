import { Metadata } from "next";
import StayTuned from "@components/ui/StayTuned";
import Footer from "@components/footer/Footer";

export const metadata: Metadata = {
  title: "Timeline",
};
export default function TimelinePage() {
  return (
    <>
      <StayTuned src={`${process.env.API_HOBBIES_AVATAR}`} />
      <Footer />
    </>
  );
}
