import { useFetch } from "@hooks/useFetch";
import { TechStackType } from "@lib/types";
import Section from "@components/common/Section";
import Heading from "@components/Heading";
import StackIcon from "@components/StackIcon";

export default async function TechStackSection() {
  const { techstacks } = await useFetch("/api/techstacks");

  const alphabeticalOrderedTechStacks = techstacks.sort((a: any, b: any) => {
    if (a.ariaLabel.toLowerCase() < b.ariaLabel.toLowerCase()) return -1;
    else if (a.ariaLabel.toLowerCase() > b.ariaLabel.toLowerCase()) return 1;
    return 0;
  });

  const renderTechStacks = () => {
    if (techstacks)
      return alphabeticalOrderedTechStacks.map((techstack: TechStackType) => (
        <StackIcon
          key={techstack._id}
          ariaLabel={techstack.ariaLabel}
          href={techstack.href}
          src={techstack.src}
          alt={techstack.alt}
        />
      ));
  };

  return (
    <Section id={"techstack"}>
      <Heading
        name={"tech stacks"}
        desc={
          "All of my current technology stack that I really enjoy using. Looking forward to learn more."
        }
      />
      <div className="stacks inline-grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7">
        {renderTechStacks()}
      </div>
    </Section>
  );
}
