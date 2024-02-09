import Earth from '@assets/img/earth.jpg'
import TopicImage from './TopicImage'

type Props = {
  className?: string
  title: string
  desc: string
}

const Topic = (props: Props) => {
  return (
    <div className={`topics switch-text-color flex flex-col items-center`}>
      <div className="flex flex-col gap-[30px] ">
        <div className="description">
          <h1 className="switch-text-color capitalize text-5xl font-bold mb-2">{ props.title }</h1>
          <p className="switch-text-color premium:w-[600px]">{ props.desc }</p>
        </div>
      </div>
    </div>
  )
}

export default Topic