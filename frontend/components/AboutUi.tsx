import Detail from "@frontend/components/Detail";
import { AboutType } from "@backend/ts/shared-types/types";

export default function AboutUi({
  displayName,
  desc,
  fullName,
  nickname,
  age,
  birthday,
  sex,
  nationality,
  status,
  languages,
}: AboutType) {
  return (
    <>
      <div className="description">
        <h1 className="capitalize text-4xl md:text-5xl lg:px-2 font-bold mb-2 text-center lg:text-left">
          {displayName}
        </h1>
        <p className="paragraph-format">{desc}</p>
      </div>
      <div className="labels flex flex-col gap-2">
        <Detail label={"Name"} detail={fullName} />
        <Detail label={"Nickname"} detail={nickname} />
        <Detail label={"Age"} detail={age} />
        <Detail label={"Birthday"} detail={birthday} />
        <Detail label={"Sex"} detail={sex} />
        <Detail label={"Nationality"} detail={nationality} />
        <Detail label={"Status"} detail={status} />
        <Detail label={"Languages"} detail={languages} />
      </div>
    </>
  );
}
