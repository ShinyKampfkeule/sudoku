interface Props {
  name: string;
  isOpponent?: boolean;
}

export const DisplayIcon = ({ name, isOpponent = false }: Props) => {
  return (
    <img
      className={`w-32 h-32 ${isOpponent ? "-scale-x-100" : ""}`}
      src={`https://robohash.org/${name}?set=set4`}
      alt="User Image"
    />
  );
};
