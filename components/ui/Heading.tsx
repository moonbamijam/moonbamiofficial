type Props = {
  name: string;
  desc: string;
};

export default function Heading({ name, desc }: Props) {
  return (
    <div className="title flex flex-col items-center ">
      <h1 className="text-5xl md:text-6xl font-bold mb-[15px] capitalize">
        {name}
      </h1>
      <p className="text-center paragraph-format">{desc}</p>
    </div>
  );
}
