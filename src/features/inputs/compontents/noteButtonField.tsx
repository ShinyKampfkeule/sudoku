interface Props {
  num: number;
  displayNumber: boolean;
}

export const NoteButtonField = ({ num, displayNumber }: Props) => {
  const numberColors: { [key: number]: string } = {
    1: "bg-[#4152F1]",
    2: "bg-[#009700]",
    3: "bg-[#790CFF]",
    4: "bg-[#DA8F03]",
    5: "bg-[#FF60DF]",
    6: "bg-[#46B57A]",
    7: "bg-[#E23250]",
    8: "bg-[#23B0B7]",
    9: "bg-[#933EC8]",
  };

  return (
    <div
      className={`rounded-xs flex justify-center items-center text-white font-semibold w-[17px] h-[17px] ${
        displayNumber ? numberColors[num] : "bg-gray-500/50"
      }`}
    >
      {displayNumber && num}
    </div>
  );
};
