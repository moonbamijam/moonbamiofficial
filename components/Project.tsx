import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

type Props = {
  _id?: string
  src: Url
  projectTitle: string
  projectDescription: string
  href: string
}

const Project = (props: Props) => {
  return (
    <div  className="flex flex-col premium:flex-row-reverse gap-[15px] ">
      <img src={ `${props.src}` } alt="" className="w-[400px] h-[220px] md:w-[640px] md:h-[480px] lg:w-[800px] lg:h-[400px] object-cover rounded-lg" />
      <div className="description">
        <li className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 " >{ props.projectTitle }</li>
        <p className="w-[400px] md:w-[600px]">
          { props.projectDescription }
          <br /><br />
          You can visit the GitHub repository <Link href={ props.href } target='_blank' className="text-blue-400">here</Link>.
        </p>
      </div>
    </div>
  )
}

export default Project