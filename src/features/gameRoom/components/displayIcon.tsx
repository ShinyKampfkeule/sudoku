interface Props {
  name: string;
  inverted?: boolean;
}

export const DisplayIcon = ({ name, inverted = false }: Props) => {
  return (
    <img
      className={`w-32 h-32 ${inverted ? "-scale-x-100" : ""}`}
      src={`https://robohash.org/${name}?set=set4`}
      alt="User Image"
    />
  );
};
