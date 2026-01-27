export const getBorderStyleCalss = (index: number) => {
  let borderClass = "flex justify-center items-center p-1";

  if (index % 9 === 8) {
    borderClass += " border-r-0";
  } else if (index % 9 === 2 || index % 9 === 5) {
    borderClass += " border-r-3 pr-2";
  } else if (index % 9 === 3 || index % 9 === 6) {
    borderClass += " pl-2";
  }

  if (index >= 72) {
    borderClass += " border-b-0";
  } else if ((18 <= index && index <= 26) || (45 <= index && index <= 53)) {
    borderClass += " border-b-3 pb-2";
  } else if ((27 <= index && index <= 35) || (54 <= index && index <= 62)) {
    borderClass += " pt-2";
  }

  return borderClass;
};
