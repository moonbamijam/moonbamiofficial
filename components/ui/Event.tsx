import { EventType } from "@lib/types";

export default function Event({
  _id,
  typeIcon,
  date,
  note,
  message,
}: EventType) {
  return (
    <div key={_id} className="relative flex items-start py-8">
      <button className="relative text-4xl bg-white dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary border-2 border-primary dark:border-gray-700 dark:hover:border-primary p-4 rounded-lg shadow-md transform hover:scale-[1.15] active:scale-100 [&>svg>path]:hover:text-white cursor-pointer">
        {typeIcon}
      </button>
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
