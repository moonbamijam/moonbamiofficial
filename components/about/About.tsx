import Detail from '@components/about/Detail';
import { AboutType } from '@customs/about';

const About = (props: AboutType) => {  
  return (
    <>
      <div className="description">
        <h1 className="switch-text-color capitalize text-5xl font-bold mb-2">{ props.displayName }</h1>
        <p className="switch-text-color w-[400px] lg:w-[450px] xl:w-[600px]">{ props.desc }</p>
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