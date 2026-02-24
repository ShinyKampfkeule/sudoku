export const getDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const rawMinutes = date.getMinutes();
  const minutes = rawMinutes < 10 ? "0" + rawMinutes : rawMinutes;

  return hours + ":" + minutes;
};
