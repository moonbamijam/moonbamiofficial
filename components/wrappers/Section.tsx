import { ReactNode } from "react"

type Props = {
  id: string
  image?: React.ReactNode
  children: React.ReactNode
  sectionClassName?: string
  contentClassName?: string
}

const Section = (props: Props) => {
  return (
    <section id={ props.id } className={`w-full relative px-[40px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] py-[100px] ${ props.sectionClassName }`}>
      { props.image }
      <div className={`content relative flex flex-col items-center ${ props.contentClassName }`}>
        { props.children }
      </div>
    </section>
  )
}

export default Section;