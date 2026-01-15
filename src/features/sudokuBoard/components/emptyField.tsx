interface Props {
  index: number;
  activeField: number;
}

export const EmptyField = ({ index, activeField }: Props) => {
  return (
    <div
      className={`w-12 h-12 rounded-xl flex justify-center items-center ${
        activeField === index && "border-white border-2"
      }`}
    />
  );
};
