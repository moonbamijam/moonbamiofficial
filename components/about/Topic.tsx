import Image from 'next/image'
import Earth from '@assets/img/earth.jpg'

type Props = {
  className: string
  title: string
  desc: string
}

const Topic = (props: Props) => {
  return (
    <div className={`topics switch-text-color flex flex-col ${ props.className } justify-between items-center lg:items-start 2xl:justify-evenly`}>
      <Image src={ Earth } alt="image" className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] premium:w-[500px] premium:h-[500px] mb-4 object-cover rounded-lg" />
      <div className="flex flex-col gap-[30px] ">
        <div className="description">
          <h1 className="switch-text-color capitalize text-6xl font-bold mb-2">{ props.title }</h1>
          <p className="switch-text-color w-[400px] lg:w-[450px] xl:w-[600px]">{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default Topic