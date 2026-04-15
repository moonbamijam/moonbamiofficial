import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { EventType } from "@/shared/types";

export default function TimelineEventWrapper({
  _id,
  typeIcon,
  date,
  note,
  message,
}: EventType) {
  return (
    <div
      key={_id}
      className="w-full lg:w-max flex py-8 opacity-80 dark:opacity-70 hover:opacity-100 group transition-opacity"
    >
      <Button
        variant="icon"
        size="max"
        className="text-4xl bg-surface group-hover:bg-primary p-4 rounded-lg shadow-lg [&>svg>path]:group-hover:text-white [&>svg>path]:dark:group-hover:text-black transition-colors"
      >
        {typeIcon}
      </Button>
      <div className="px-4">
        <SectionHeading
          className="text-3xl! sm:text-4xl! group-hover:text-primary font-black capitalize transition-colors"
          name={date}
        />

        <div className="text-2xl sm:text-3xl text-wrap font-bold text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors">
          {note}
        </div>
        <Paragraph variant="wrap" className="mt-1">
          {message}
        </Paragraph>
      </div>
    </div>
  );
}
