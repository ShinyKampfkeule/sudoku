interface Props {
  sender: string;
}

export const User = ({ sender }: Props) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-2 h-2 bg-accent rounded-full" />
      <span>{sender}</span>
    </div>
  );
};
