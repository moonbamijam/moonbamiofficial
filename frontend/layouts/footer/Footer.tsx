import {
  socialMediaProps,
  socialMedias,
} from "@frontend/ts/constants/socialMedias";
import SocMedIconBtn from "./SocMedIconBtn";

export default function Footer() {
  const year = new Date();
  return (
    <section
      id="footer"
      className="container px-16 pb-16 pt-24 my-8 gap-8 flex flex-col items-center"
    >
      <div className="max-w-[500px] flex justify-evenly gap-2">
        {socialMedias.map(({ href, icon, text }: socialMediaProps, id) => (
          <SocMedIconBtn key={id} href={href} ariaLabel={text} icon={icon} />
        ))}
      </div>
      <p className="text-center md:text-left">
        Copyright <span className="text-xs align-text-top">&#169; </span>{" "}
        {year.getFullYear().toString()} Moonbami. All rights reserved.
      </p>
    </section>
  );
}
