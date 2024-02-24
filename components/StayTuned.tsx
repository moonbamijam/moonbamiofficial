import Image from "next/image";

type Props = {
  src: string | undefined;
};

const StayTuned = ({ src }: Props) => {
  return (
    <div id="" className="container relative">
      <section className="content pb-[300px] pt-[200px] lg:pt-[250px] flex flex-col gap-10 items-center justify-center">
        <h1 className="switch-text-color font-bold md:text-xl lg:text-3xl xl:text-7xl text-center">
          Please stay tuned for this page!
        </h1>
        <Image
          src={`${src}`}
          alt="Stay tuned image"
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover rounded-full"
        />
      </section>
    </div>
  );
};

export default StayTuned;
