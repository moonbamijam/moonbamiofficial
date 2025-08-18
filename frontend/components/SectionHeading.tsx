type SectionHeadingProps = {
  name: string;
};

export default function SectionHeading({ name }: SectionHeadingProps) {
  return (
    <h1 className="capitalize text-4xl md:text-5xl lg:px-2 font-bold mb-3">
      {name}
    </h1>
  );
}
