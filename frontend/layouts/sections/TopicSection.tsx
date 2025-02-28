import { useFetch } from "@backend/hooks/useFetch";
import { TopicType } from "@shared/types";
import Section from "@frontend/components/common/Section";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import Topic from "@frontend/components/Topic";
import Grid from "@frontend/components/common/Grid";

const renderTopics = (topics: TopicType[]) => {
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

export default async function TopicSection() {
  const { topics } = await useFetch("/api/topics");

  return (
    <Section id="topics" sectionStyles="w-full">
      <Grid gridStyles="grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10">
        {renderTopics(topics)}
      </Grid>
    </Section>
  );
}
