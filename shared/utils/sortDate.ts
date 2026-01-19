import { EventType } from "@shared/types";

export const sortDateByAscendingOrder = (a: EventType, b: EventType) => {
  return Date.parse(a.date) - Date.parse(b.date);
};

export const sortDateByDescendingOrder = (a: EventType, b: EventType) => {
  return Date.parse(b.date) - Date.parse(a.date);
};
