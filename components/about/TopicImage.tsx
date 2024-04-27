import Picture from "@components/common/Picture";

type Props = {
  src: string;
  alt: string;
};

export default function TopicImage({ src, alt }: Props) {
  return (
    <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square rounded-lg shadow-lg shadow-gray-500 mb-4">
      <Picture src={src} alt={`${alt}`} />
    </div>
  );
}
