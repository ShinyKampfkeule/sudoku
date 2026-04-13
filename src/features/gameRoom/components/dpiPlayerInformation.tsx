interface Props {
  name: string;
  level: number;
}

export const DPIPlayerInformation = ({ name, level }: Props) => {
  return (
    <>
      <span className="text-xl">{name}</span>
      <span>Level: {level}</span>
    </>
  );
};
