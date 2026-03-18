interface Props {
  profile: any;
}

export const DisplayPlayerInformation = ({ profile }: Props) => {
  return (
    <div className="flex flex-col w-55 h-17 py-2 justify-center items-center bg-secondary rounded-md text-primary">
      {!profile ? (
        <>
          <span>Waiting for Player to join...</span>
        </>
      ) : (
        <>
          <span className="text-xl">{profile.name}</span>
          <span>Level: {profile.level}</span>
        </>
      )}
    </div>
  );
};
