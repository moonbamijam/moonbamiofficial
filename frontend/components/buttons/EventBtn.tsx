import { EventType } from "@shared/types";
import { Button } from "../ui/Button";

export default function EventBtn({
  _id,
  typeIcon,
  date,
  note,
  message,
}: EventType) {
  return (
    <div key={_id} className="flex items-center py-8">
      <div className="w-max h-full flex flex-col items-center">
        <hr className="absolute h-full rotate-90 bg-primary dark:animate-rgb-bg-dark -z-10 rounded-full" />
        <Button
          variant="icon"
          size="max"
          className="text-4xl bg-white dark:bg-dm-surface hover:bg-primary p-4 rounded-lg shadow-lg hover:scale-[1.1] active:scale-100 [&>svg>path]:hover:text-white"
        >
          {typeIcon}
        </Button>
      </div>
      <div className="px-4">
        <h1 className="text-primary text-[2.15rem] font-black capitalize">
          {date}
        </h1>
        <h3 className="text-secondary dark:text-primary text-[1.5rem] font-bold">
          {note}
        </h3>
        <p className="max-w-[300px] mt-2">{message}</p>
      </div>
    </div>
  );
}
