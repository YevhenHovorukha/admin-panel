interface IDateFormatOptions {
  day: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "narrow" | "short" | "long";
  year: "numeric" | "2-digit";
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  hour12: boolean;
}

export const getCurrentFormattedDate = () => {
  const options: IDateFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const currentDate = new Date().toLocaleString("en-US", options);
  return currentDate;
};
