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
import Heading from "@components/Heading";
import EventBtn from "@components/EventBtn";

export default async function TimelineSection() {
  const { timelines } = await useFetch("/api/timelines");

  const renderTimeline = () => {
    let typeIcon;

    if (timelines) {
      return timelines
        .sort(sortDateByDescendingOrder)
        .map((event: EventType) => {
          switch (event.type) {
            case "present":
              typeIcon = <FaGift />;
              break;
            case "gift":
              typeIcon = <FaGift />;
              break;
            case "born":
              typeIcon = <FaBaby />;
              break;
            case "birthday":
              typeIcon = <FaCakeCandles />;
              break;
            case "game":
              typeIcon = <FaGamepad />;
              break;
            case "programming":
              typeIcon = <FaCode />;
              break;
            case "school":
              typeIcon = <IoSchool />;
              break;
            case "religion":
              typeIcon = <FaChurch />;
              break;
            default:
              typeIcon = <FaMoon />;
              break;
          }
          return (
            <EventBtn
              key={event._id}
              _id={event._id}
              typeIcon={typeIcon}
              date={event.date}
              note={event.note}
              message={event.message}
            />
          );
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
        <div className="relative">
          {TimelineTip("present")}
          {renderTimeline()}
          {TimelineTip("past")}
        </div>
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
