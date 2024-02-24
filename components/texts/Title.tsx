type Props = {
  name: string;
  desc: string;
};

const Title = ({ name, desc }: Props) => {
  return (
    <div className="title flex flex-col items-center ">
      <h1 className="switch-text-color text-5xl md:text-6xl font-bold mb-[15px] capitalize">
        {name}
      </h1>
      <p className="switch-text-color text-center paragraph-format">{desc}</p>
    </div>
  );
};

export default Title;
