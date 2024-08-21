export const timeConvertor = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const persianTime = date.toLocaleTimeString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return persianTime;
};
