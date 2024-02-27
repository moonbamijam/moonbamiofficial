import { Metadata } from "next";
import dynamic from "next/dynamic";
import Section from "@components/wrappers/Section";
import StayTuned from "@components/ui/StayTuned";

const Footer = dynamic(() => import("@components/footer/Footer"));

export const metadata: Metadata = {
  title: "Project",
};

const ProjectPageById = async () => {
  return (
    <>
      {/* <Section id={"project-page-by-id"}>
        <div className="h-[500px]">Title: {params._id}</div>
      </Section> */}
      <StayTuned src={`${process.env.API_ANIME_AVATAR}`} />
      <Footer />
    </>
  );
};

export default ProjectPageById;
