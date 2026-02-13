interface Props {
  note: string;
}

export const NotesNumber = ({ note }: Props) => {
  const noteNum = parseInt(note);
  const row = noteNum < 7 ? (noteNum < 4 ? 1 : 2) : 3;
  const col = noteNum % 3 === 1 ? 1 : noteNum % 3 === 2 ? 2 : 3;

  let containerClass = "flex justify-center items-center rounded-xs";
  switch (note) {
    case "1":
      containerClass += " bg-[#4152F1]";
      break;
    case "2":
      containerClass += " bg-[#009700]";
      break;
    case "3":
      containerClass += " bg-[#790CFF]";
      break;
    case "4":
      containerClass += " bg-[#DA8F03]";
      break;
    case "5":
      containerClass += " bg-[#FF60DF]";
      break;
    case "6":
      containerClass += " bg-[#46B57A]";
      break;
    case "7":
      containerClass += " bg-[#E23250]";
      break;
    case "8":
      containerClass += " bg-[#23B0B7]";
      break;
    case "9":
      containerClass += " bg-[#933EC8]";
      break;
  }

  return (
    <div
      key={note}
      className={containerClass}
      style={{
        gridRow: row,
        gridColumn: col,
      }}
    >
      <span className="text-xs text-white">{note}</span>
    </div>
  );
};
