export const WEEK_DAYS: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export const MONTHS: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function Calendar(props: { class?: string }) {
  const date = new Date();
  return (
    <span class={props.class}>
      {WEEK_DAYS[date.getUTCDay()]} {MONTHS[date.getMonth()]} {date.getDate()},{" "}
      {date.getFullYear()}
    </span>
  );
}
