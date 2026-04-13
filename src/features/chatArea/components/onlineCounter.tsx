interface Props {
  usersInRoom: number;
}

export const OnlineCounter = ({ usersInRoom }: Props) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="bg-green-800 w-2 h-2 rounded-full" />
      <span className="text-green-800">{usersInRoom}</span>
    </div>
  );
};
