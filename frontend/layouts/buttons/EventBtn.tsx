import { EventType } from "@shared/types";
import { Button } from "../../components/ui/Button";

export default function EventBtn({
  _id,
  typeIcon,
  date,
  note,
  message,
}: EventType) {
  return (
    <div key={_id} className="relative flex items-start py-8">
      <Button
        variant="icon"
        size="max"
        className="text-4xl bg-white dark:bg-dm-surface hover:bg-primary dark:hover:bg-primary border-primary p-4 rounded-lg shadow-md hover:scale-[1.15] active:scale-100 [&>svg>path]:hover:text-white"
      >
        {typeIcon}
      </Button>
      <div className="px-4">
        <h1 className="text-secondary dark:text-secondary-light text-4xl font-black capitalize">
          {date}
        </h1>
        <h3 className="text-primary dark:text-primary-light text-2xl font-bold">
          {note}
        </h3>
        <p className="max-w-[300px] mt-2">{message}</p>
      </div>
    </div>
  );
}
