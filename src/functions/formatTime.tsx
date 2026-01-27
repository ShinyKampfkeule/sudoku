export const formatTime = (origin: number) => {
  const hours = Math.floor(origin / 3600);
  const minutes = Math.floor((origin % 3600) / 60);
  const seconds = origin % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0",
  )}:${String(seconds).padStart(2, "0")}`;
};
