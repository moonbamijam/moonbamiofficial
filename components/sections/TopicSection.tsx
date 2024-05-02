import { useFetch } from "@hooks/useFetch";
import { TopicType } from "@shared-types/topic";
import Section from "@components/common/Section";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import Topic from "@components/ui/Topic";
import Grid from "@components/common/Grid";

export default async function TopicSection() {
  const { topics } = await useFetch("/api/topics");

  const renderTopics = () => {
    if (topics) {
      return topics.map((topic: TopicType) => (
        <Topic key={topic._id} title={topic.title} desc={topic.desc} />
      ));
    } else return <LoadingSpinner size="100px" textSize="6xl" />;
  };

  return (
    <Section id="topics" sectionStyles=" w-full">
      <Grid gridStyles="grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10">
        {renderTopics()}
      </Grid>
    </Section>
  );
}
