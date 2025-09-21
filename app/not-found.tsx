import Link from "next/link";
import Section from "@frontend/layouts/common/Section";
import { buttonVariants } from "@frontend/components/ui/Button";
import { Image } from "@frontend/components/ui/Image";

export default function NotFound() {
  return (
    <Section className="container h-screen flex flex-col lg:flex-row items-center justify-center gap-8 py-[100px]">
      <Image
        src="https://i.pinimg.com/originals/9d/26/92/9d2692b51ebf08955da879128c57ab69.gif"
        alt="Menhera chan"
        shape="square"
        object="cover"
        className="max-w-[400px] h-max shadow-none"
      />
      <div className="space-y-2 xl:space-y-5">
        <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Nothing Here!
        </h1>
        <div className="space-y-10">
          <p className="text-xl lg:text-2xl xl:text-3xl">
            The page you're looking for seems to be missing.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({ variant: "default", size: "max" })} ml-auto`}
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </Section>
  );
}
