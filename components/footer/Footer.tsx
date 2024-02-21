import Image from "next/image";
import Anchor from "./Anchor";

import Moonbami from '@public/moonbami.webp';

const Footer = () => {
  const year = new Date()
  return (
    <>
      <div className="footer-bg relative bottom-0 border-t-4 border-azure w-full "></div>
      <section id="footer" className="container relative bottom-0 pt-[100px] pb-[50px] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px]">
        <div className="main flex flex-col lg:flex-row gap-[50px] items-center lg:items-start">
          <div className="brand flex flex-col gap-2 items-center">
            <Image 
              src={ Moonbami } 
              alt="Jam Moonbami" 
              width={1000} 
              height={1000} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-[100px] sm:w-[125px] md:w-[150px] xl:w-[175px] premium:w-[200px]  rounded-lg" />
            <h1 className="switch-text-color font-bold text-3xl md:text-4xl lg:text-5xl ">Moonbami</h1>
          </div>
          <div className="content w-full flex justify-around">
            <div className="navigate">
              <h1 className="switch-text-color font-bold text-2xl mb-1">Navigate</h1>
              <div className="links flex flex-col gap-1">
                <Anchor href={"/"} text={"home"} />
                <Anchor href={"/anime"} text={"anime"} />
                <Anchor href={"/games"} text={"games"} />
                <Anchor href={"/hobbies"} text={"hobbies"} />
                <Anchor href={"/music"} text={"music"} />
              </div>
            </div>
            <div className="contact">
              <h1 className="switch-text-color font-bold text-2xl mb-1">Contact</h1>
              <div className="links flex flex-col gap-1">
                <Anchor href={"https://www.facebook.com/MoonbamiOffcl"} text={"facebook"} target="_blank"/>
                <Anchor href={"https://www.instagram.com/moonbamidesu/"} text={"instagra"} target="_blank"/>
                <Anchor href={"https://twitter.com/Moonbami_"} text={"twitter x"} target="_blank"/>
                <Anchor href={"https://github.com/MoonbamiOfficial"} text={"GitHub"} target="_blank"/>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-[50px]"/>
        <p className="switch-text-color mt-2 text-center">&#169; { year.getFullYear().toString() } Moonbami</p>
      </section>
    </>
  )
}

export default Footer