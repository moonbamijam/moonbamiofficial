import { useFetch } from "@backend/hooks/useFetch";
import { TechStackType } from "@shared/types";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import StackIcon from "@frontend/components/StackIcon";

const renderTechStacks = (techstacks: TechStackType[]) => {
  if (techstacks) {
    const sortedTechStack = techstacks.sort((a: any, b: any) => {
      if (a.ariaLabel.toLowerCase() < b.ariaLabel.toLowerCase()) return -1;
      else if (a.ariaLabel.toLowerCase() > b.ariaLabel.toLowerCase()) return 1;
      return 0;
    });

    return sortedTechStack.map((techstack: TechStackType) => (
      <StackIcon
        key={techstack._id}
        ariaLabel={techstack.ariaLabel}
        href={techstack.href}
        src={techstack.src}
        alt={techstack.alt}
      />
    ));
  }
};

export default async function TechStackSection() {
  const { techstacks } = await useFetch("/api/techstacks");

  return (
    <Section id={"techstack"}>
      <Heading
        name={"tech stacks"}
        desc={
          "All of my current technology stack that I really enjoy using. Looking forward to learn more."
        }
      />
      <div className="stacks inline-grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7">
        {renderTechStacks(techstacks)}
      </div>
    </Section>
  );
}
