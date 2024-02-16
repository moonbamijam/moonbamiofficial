import { ProjectType } from '@customs/project'
import Image from 'next/image'
import Link from 'next/link'

const Project = (props: ProjectType) => {
  return (
    <div className="flex flex-col premium:flex-row-reverse gap-[15px] ">
      <Image src={ `${props.src}` } alt="" width={'3000'} height={'3000'} className="w-[400px] h-[220px] md:w-[640px] md:h-[480px] lg:w-[800px] lg:h-[400px] object-cover rounded-lg" />
      <div className="description">
        <li className="switch-text-color text-3xl md:text-4xl lg:text-5xl font-bold mb-2 " >{ props.projectTitle }</li>
        <p className="switch-text-color paragraph-format">
          { props.projectDesc }
          <br /><br />
          Visit the GitHub repository of <Link href={ props.href } target='_blank' className="text-blue-400 hover:underline">{ props.projectTitle }</Link>.
        </p>
      </div>
    </div>
  )
}

export default Project;