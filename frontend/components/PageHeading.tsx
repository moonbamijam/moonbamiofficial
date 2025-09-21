import { Paragraph } from "./ui/Paragraph";

type PageHeadingProps = {
  id: string;
  name: string;
  desc?: string;
};

export default function PageHeading({ id, name, desc }: PageHeadingProps) {
  return (
    <div id={id} className="title flex flex-col items-center pt-36 pb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-[15px] capitalize">
        {name}
      </h1>
      <Paragraph className="text-center paragraph-format">{desc}</Paragraph>
    </div>
  );
}
