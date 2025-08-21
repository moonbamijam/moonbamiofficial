import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";

export default function AboutProgramming() {
  return (
    <Section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:order-last xl:col-span-2 premium:col-span-3 flex flex-col items-end">
        <Image
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
          alt="Programming"
          shape="tv"
        />
        <ImageCredits name="Chris Ried" href="https://unsplash.com/@cdr6934" />
      </div>
      <div className="xl:order-first xl:col-span-2 programming">
        <SectionHeading name="Programming" />
        <Paragraph>
          I'd never had any interest in programming back then, I don't even
          think myself doing it as a hobby. I remember there was activity at my
          campus where you have to generate and utilize basic HTML. On that day,
          I don't even know how to begin because I don't even know what to do in
          the first place. Fortunately, it's a pair, so my friend helped me up.
          I was watching him at that point while he worked on HTML for our
          activity. I feel as though I am falling behind and that I SHOULD be
          doing these kinds of things. After the activity, I began studying the
          fundamentals of web developing about a week later.
          <br />
          <br />I immediately{" "}
          <span className="text-primary font-semibold">
            loved the process of organizing your files
          </span>
          , folders, codes, etc. The idea that your workspace should be tidy and
          well-organized. That's a feeling I want to experience repeatedly.
          That's when it all began, and now I find myself as dreaming of
          becoming a software engineer.
        </Paragraph>
      </div>
    </Section>
  );
}
