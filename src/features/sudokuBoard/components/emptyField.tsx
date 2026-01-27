interface Props {
  index: number;
  activeField: number;
}

export const EmptyField = ({ index, activeField }: Props) => {
  return (
    <div
      className={`w-12 h-12 rounded-lg flex justify-center items-center bg-white/10 ${
        activeField === index && "border-white border-2"
      }`}
    />
  );
};
