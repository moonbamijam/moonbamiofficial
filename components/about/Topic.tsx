import { TopicType } from '@shared-types/topic'

const Topic = (props: TopicType) => {
  return (
    <div className="topic flex flex-col items-center">
      <h1 className="switch-text-color capitalize text-4xl md:text-5xl text-center font-bold mb-2">{ props.title }</h1>
      <p className="switch-text-color paragraph-format">{ props.desc }</p>
    </div>
  )
}

export default Topic