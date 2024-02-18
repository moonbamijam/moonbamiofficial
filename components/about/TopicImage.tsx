import Image, { StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
}

const TopicImage = (props: Props) => {
  return (
    <Image 
      src={ props.src } 
      alt="image" 
      width={2944} 
      height={2944} 
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] mb-4 object-cover rounded-lg shadow-lg shadow-gray-500 " />

  )
}

export default TopicImage