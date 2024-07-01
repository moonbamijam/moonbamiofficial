import { FaBaby } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaChurch } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { EventType } from "@lib/types";
import { useFetch } from "@hooks/useFetch";
import { sortDateByDescendingOrder } from "@utils/sortDate";
import Section from "@components/common/Section";
import Heading from "@components/ui/Heading";

export default async function TimelineSection() {
  const { timelines } = await useFetch("/api/timelines");

  const renderTimeline = () => {
    if (timelines) {
      return timelines
        .sort(sortDateByDescendingOrder)
        .map((event: EventType) => (
          <div key={event._id} className="relative flex items-start py-8">
            <button className="relative text-4xl bg-white dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary border-2 border-primary dark:border-gray-700 dark:hover:border-primary p-4 rounded-lg shadow-md transform hover:scale-[1.15] active:scale-100 [&>svg>path]:hover:text-white cursor-pointer">
              {event.type == "present" && <FaGift />}
              {event.type == "born" && <FaBaby />}
              {event.type == "birthday" && <FaCakeCandles />}
              {event.type == "game" && <FaGamepad />}
              {event.type == "programming" && <FaCode />}
              {event.type == "school" && <IoSchool />}
              {event.type == "religion" && <FaChurch />}
            </button>
            <div className="px-4">
              <h1 className="text-secondary dark:text-secondary-light text-4xl font-black capitalize">
                {event.date}
              </h1>
              <h3 className="text-primary dark:text-primary-light text-2xl font-bold">
                {event.note}
              </h3>
              <p className="max-w-[300px] mt-2">{event.message}</p>
            </div>
          </div>
        ));
    }
  };

  return (
    <>
      <Section id="timeline">
        <Heading
          name="Timeline"
          desc="A simple timeline of events that I want to share with you, everyone."
        />
        <main className="relative">
          {TimelineTip("present")}
          {renderTimeline()}
          {TimelineTip("past")}
        </main>
      </Section>
    </>
  );
}

function TimelineTip(time: string) {
  return (
    <div
      className={`absolute ${
        time == "present" ? "top-0" : "bottom-0"
      }  h-full w-[4px] bg-primary dark:bg-gray-800 ml-[36px] -z-10 flex justify-center`}
    >
      <div
        className={`absolute ${
          time == "present" ? "top-0" : "bottom-0"
        } w-4 h-4 rounded-full bg-primary dark:bg-gray-800`}
      ></div>
    </div>
  );
}
