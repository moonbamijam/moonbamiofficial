import { FaBaby } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaChurch } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { EventType } from "@lib/types";
import { useFetch } from "@hooks/useFetch";
import { sortDateByDescendingOrder } from "@utils/sortDate";
import Section from "@components/common/Section";
import Heading from "@components/ui/Heading";
import Event from "@components/ui/Event";

export default async function TimelineSection() {
  const { timelines } = await useFetch("/api/timelines");

  const renderTimeline = () => {
    if (timelines) {
      return timelines
        .sort(sortDateByDescendingOrder)
        .map((event: EventType) => {
          switch (event.type) {
            case "present":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaGift />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "gift":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaGift />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "born":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaBaby />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "birthday":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaCakeCandles />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "game":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaGamepad />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "programming":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaCode />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "school":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<IoSchool />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            case "religion":
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaChurch />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
            default:
              return (
                <Event
                  _id={event._id}
                  typeIcon={<FaMoon />}
                  date={event.date}
                  note={event.note}
                  message={event.message}
                />
              );
          }
        });
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
