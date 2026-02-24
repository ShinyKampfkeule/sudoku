interface Props {
  sender: string;
}

export const UserIcon = ({ sender }: Props) => {
  return (
    <img
      src={`https://robohash.org/${sender}?set=set4`}
      alt="User Image"
      className="w-10 h-10"
    />
  );
};
