export const getBorderStyleCalss = (index: number, playerBoard: boolean) => {
  let borderClass = `flex justify-center items-center ${playerBoard ? "p-1" : "p-0"}`;

  if (index % 9 === 8) {
    borderClass += " border-r-0";
  } else if (index % 9 === 2 || index % 9 === 5) {
    borderClass += ` border-r-3 ${playerBoard ? "pr-2" : "pr-1"}`;
  } else if (index % 9 === 3 || index % 9 === 6) {
    borderClass += ` ${playerBoard ? "pl-2" : "pl-1"}`;
  }

  if (index >= 72) {
    borderClass += " border-b-0";
  } else if ((18 <= index && index <= 26) || (45 <= index && index <= 53)) {
    borderClass += ` border-b-3 ${playerBoard ? "pb-2" : "pb-1"}`;
  } else if ((27 <= index && index <= 35) || (54 <= index && index <= 62)) {
    borderClass += ` ${playerBoard ? "pt-2" : "pt-1"}`;
  }

  return borderClass;
};
