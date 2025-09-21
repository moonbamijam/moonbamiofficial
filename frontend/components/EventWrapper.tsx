import { EventType } from "@shared/types";
import { Button } from "./ui/Button";
import { Paragraph } from "./ui/Paragraph";

export default function EventWrapper({
  _id,
  typeIcon,
  date,
  note,
  message,
}: EventType) {
  return (
    <div
      key={_id}
      className="w-full lg:w-max flex py-8 opacity-80 dark:opacity-70 hover:opacity-100 group duration-500"
    >
      <Button
        variant="icon"
        size="max"
        className="text-4xl bg-white dark:bg-dm-surface group-hover:bg-primary p-4 rounded-lg shadow-lg [&>svg>path]:group-hover:text-white [&>svg>path]:dark:group-hover:text-black"
      >
        {typeIcon}
      </Button>
      <div className="px-4">
        <h1 className="group-hover:text-primary text-4xl font-black capitalize">
          {date}
        </h1>
        <h3 className="text-3xl font-bold text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-400">
          {note}
        </h3>
        <Paragraph className="mt-1">{message}</Paragraph>
      </div>
    </div>
  );
}
