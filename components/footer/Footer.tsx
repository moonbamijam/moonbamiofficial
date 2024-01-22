import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url
  text: string
  icon?: ReactNode
}

const Footer = () => {
  const year = new Date()
  return (
    <section id="footer" className="relative bottom-0 border-t-[8px] border-electric-pink pt-[150px] pb-[50px] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] transition-all">
      <div className="main flex flex-col lg:flex-row gap-[30px] items-center">
        <div className="brand flex flex-col gap-2 items-center">
          <img src={`${process.env.REACT_APP_AVATAR}`} alt="" className="w-[100px] sm:w-[125px] md:w-[150px] xl:w-[175px] premium:w-[200px]  rounded-lg" />
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl ">Moonbami</h1>
        </div>
        <div className="content w-full flex justify-around">
          <div className="navigate">
            <h1 className="font-bold text-2xl ">Navigate</h1>
            <div className="links flex flex-col">
              <Anchor href={"/"} text={"home"} />
              <Anchor href={"/anime"} text={"anime"} />
              <Anchor href={"/games"} text={"games"} />
              <Anchor href={"/hobbies"} text={"hobbies"} />
              <Anchor href={"/music"} text={"music"} />
            </div>
          </div>
          <div className="contact">
            <h1 className="font-bold text-2xl ">Contact</h1>
            <div className="links flex flex-col">
              <Anchor href={"https://www.facebook.com/MoonbamiOffcl"} text={"facebook"} />
              <Anchor href={"https://www.instagram.com/moonbamidesu/"} text={"instagra"} />
              <Anchor href={"https://twitter.com/Moonbami_"} text={"twitter x"} />
              <Anchor href={"https://github.com/MoonbamiOfficial"} text={"GitHub"} />
            </div>
        </div>
        </div>
      </div>
      <hr className="w-full mt-[50px]"/>
      <p className="mt-2 text-center">&#169; { year.getFullYear() } Moonbami</p>
    </section>
  )
}

const Anchor = (props: Props) => {
  return (
    <Link href={ props.href } target="_blank" className="capitalize">
      <span>{ props.icon }</span>
      { props.text }
    </Link>
  )
}

export default Footer