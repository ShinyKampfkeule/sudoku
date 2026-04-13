interface Props {
  opponent: boolean;
}

export const DPIPlaceholderText = ({ opponent }: Props) => {
  if (opponent) return <span>Waiting for Player to join...</span>;

  return <span>Loading...</span>;
};
