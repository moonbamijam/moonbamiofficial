type SectionHeadingProps = {
  name: string;
  className?: string;
};

export default function SectionHeading({
  name,
  className,
}: SectionHeadingProps) {
  return (
    <h1
      className={`capitalize text-4xl md:text-5xl font-bold mb-3 ${className}`}
    >
      {name}
    </h1>
  );
}
