import { TopicType } from "@shared/types";

export default function Topic({ title, desc }: TopicType) {
  return (
    <div className="topic flex flex-col items-center">
      <h1 className="capitalize text-4xl md:text-5xl text-center font-bold mb-2">
        {title}
      </h1>
      <p className="paragraph-format whitespace-pre-line">{desc}</p>
    </div>
  );
}
