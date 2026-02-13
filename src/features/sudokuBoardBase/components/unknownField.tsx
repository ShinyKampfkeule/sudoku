interface Props {
  index: number;
  activeField: number;
  playerBoard: boolean;
}

export const UnknownField = ({ index, activeField, playerBoard }: Props) => {
  return (
    <div
      className={`${playerBoard ? "w-12 h-12" : "w-8 h-8"} rounded-lg flex justify-center items-center bg-gray-600 text-white text-xl ${
        activeField === index && "border-white border-2"
      }`}
    >
      ?
    </div>
  );
};
