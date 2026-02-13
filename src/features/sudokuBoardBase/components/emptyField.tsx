interface Props {
  index: number;
  activeField: number;
  playerBoard: boolean;
}

export const EmptyField = ({ index, activeField, playerBoard }: Props) => {
  return (
    <div
      className={`${playerBoard ? "w-12 h-12" : "w-8 h-8"} rounded-lg flex justify-center items-center bg-white/10 ${
        activeField === index && "border-white border-2"
      }`}
    />
  );
};
