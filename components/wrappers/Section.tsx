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
    <section id={ props.id } className={`w-full relative py-[100px] ${ props.sectionClassName }`}>
      { props.image }
      <div className={`content relative flex flex-col items-center px-[30px] ${ props.contentClassName }`}>
        { props.children }
      </div>
    </section>
  )
}

export default Section;