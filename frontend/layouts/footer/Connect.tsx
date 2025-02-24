import { socialMedias } from "@frontend/ts/constants/socialMedias";
import Anchor from "./Anchor";

export default function Connect() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-semibold text-lg capitalize">connect</h2>
      {socialMedias.map((socialMedia, id) => (
        <Anchor
          key={id}
          href={socialMedia.href}
          target="_blank"
          text={socialMedia.text}
        />
      ))}
    </div>
  );
}
