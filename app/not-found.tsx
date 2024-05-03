import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container relative">
      <section className="content pb-[300px] pt-[200px] lg:pt-[250px] flex flex-col gap-10 items-center justify-center">
        <h1 className="switch-text-color font-bold text-lg md:text-xl lg:text-3xl xl:text-7xl text-center">
          Page not found!
          <h2 className="switch-text-color font-normal text-lg">
            Go back to
            <Link
              href="/"
              className="text-primary capitalize hover:underline inline"
            >
              home
            </Link>
          </h2>
        </h1>
        <Image
          src={`${process.env.API_NOT_FOUND}`}
          alt=""
          width={"3000"}
          height={"3000"}
          className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] object-cover rounded-full"
        />
      </section>
    </div>
  );
}
