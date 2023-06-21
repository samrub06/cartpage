import { format, parseISO } from "date-fns";

export const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, "d MMMM - HH:mm", {
    timeZone: "Europe/Berlin"
  });
  return formattedDate;
};
