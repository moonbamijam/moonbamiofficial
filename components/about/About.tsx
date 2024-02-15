import Detail from '@components/about/Detail';
import { AboutType } from '@customs/about';

const About = (props: AboutType) => {  
  return (
    <>
      <div className="description">
        <h1 className="switch-text-color capitalize text-4xl md:text-5xl lg:px-2 font-bold mb-2 text-center lg:text-left">{ props.displayName }</h1>
        <p className="switch-text-color paragraph-format">{ props.desc }</p>
      </div>
      <div className="labels flex flex-col gap-2">
        <Detail label={"Name"} detail={ props.fullName } />
        <Detail label={"Nickname"} detail={ props.nickname } />
        <Detail label={"Age"} detail={ props.age }/>
        <Detail label={"Birthday"} detail={ props.birthday }/>
        <Detail label={"Sex"} detail={ props.sex }/>
        <Detail label={"Nationality"} detail={ props.nationality }/>
        <Detail label={"Status"} detail={ props.status }/>
        <Detail label={"Languages"} detail={ props.languages }/>
      </div>
    </>
  )
}

export default About