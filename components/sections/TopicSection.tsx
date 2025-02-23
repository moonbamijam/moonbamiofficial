import { useFetch } from "@hooks/useFetch";
import { TopicType } from "@lib/types";
import Section from "@components/common/Section";
import LoadingSpinner from "@components/LoadingSpinner";
import Topic from "@components/Topic";
import Grid from "@components/common/Grid";

export default async function TopicSection() {
  const { topics } = await useFetch("/api/topics");

  const renderTopics = () => {
    if (topics) {
      return topics.map((topic: TopicType) => (
        <Topic
          key={topic._id}
          title={topic.title}
          desc={topic.desc.replace(/\\n/g, "\n")}
        />
      ));
    } else return <LoadingSpinner size="100px" fontSize="64px" />;
  };

  return (
    <Section id="topics" sectionStyles="w-full">
      <Grid gridStyles="grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10">
        {renderTopics()}
      </Grid>
    </Section>
  );
}
