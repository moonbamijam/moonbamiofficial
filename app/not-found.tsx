import Link from "next/link"
import { FaSadCry } from "react-icons/fa"

const NotFound = () => {
  return (
    <div id="" className=" container relative">
      <section className="content pb-[300px] mt-[200px] lg:mt-[250px] flex flex-col gap-10 items-center justify-center">
        <h1 className="switch-text-color font-bold text-7xl text-center w-[700px]">Page not found! 
          <h2 className="switch-text-color text-4xl capitalize">go back <Link href="/" className="text-blue-400 capitalize underline">home</Link>
          </h2>
        </h1>
        <div className="rounded-full bg-black p-1 dark:bg-transparent text-3xl w-[200px]">
          <FaSadCry />
        </div>
      </section>
    </div>
  )
}

export default NotFound