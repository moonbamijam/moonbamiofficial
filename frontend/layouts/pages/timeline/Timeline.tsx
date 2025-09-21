import { FaBaby } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaChurch } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { EventType, TimelineType } from "@shared/types";
import { useFetch } from "@backend/hooks/useFetch";
import { sortDateByDescendingOrder } from "@frontend/ts/utils/sortDate";
import Section from "@frontend/layouts/common/Section";
import EventWrapper from "@frontend/components/EventWrapper";

const renderTimeline = (timelines: TimelineType[]) => {
  let typeIcon;

  if (timelines) {
    return timelines
      .sort(sortDateByDescendingOrder)
      .map(({ date, message, note, _id, type, typeIcon }: EventType) => {
        switch (type) {
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
          <EventWrapper
            key={_id}
            _id={_id}
            typeIcon={typeIcon}
            date={date}
            note={note}
            message={message}
          />
        );
      });
  }
};

export default async function Timeline() {
  const { timelines } = await useFetch("/api/timelines");

  return (
    <Section className="lg:w-max mx-auto">{renderTimeline(timelines)}</Section>
  );
}
