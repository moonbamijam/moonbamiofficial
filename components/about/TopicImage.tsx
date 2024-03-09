import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
};

const TopicImage = ({ src }: Props) => {
  return (
    <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square rounded-lg shadow-lg shadow-gray-500 mb-4">
      <Image
        priority
        src={src}
        alt="Jam Moonbami"
        fill
        sizes="(min-width: 1540px) 500px, (min-width: 1040px) 400px, 300px"
      />
    </div>
  );
};

export default TopicImage;
