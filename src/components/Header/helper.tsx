export const getPathName = (str: string) => {
  if (str === "/") {
    return "Overview";
  }
  return str[1].toUpperCase() + str.slice(2, str.length + 1);
};
