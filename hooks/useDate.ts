export function useDate(item: { published_at: string }) {
  const date = new Date(`${item?.published_at}`);
  const convertedDate = date.toLocaleString("en-US", { 
    timeZone: "UTC", 
    month: "short", 
    day: "numeric",
    year: "numeric",
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  console.log("This is converted date", convertedDate);
  return convertedDate;
}
