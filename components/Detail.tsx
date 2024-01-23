import React from 'react'

type Props = {
  label?: string
  detail?: string
}
const Detail = (props: Props) => {
  return (
    <div className="details flex">
      <div className="label flex">
        <span className="switch-text-color capitalize w-[115px] ">{ props.label }</span>
        <span>: &#160;</span>
      </div>
      <span className="switch-text-color capitalize flex flex-wrap w-[200px] lg:w-[300px] xl:w-[400px]">{ props.detail }</span>
    </div>
  )
}

export default Detail