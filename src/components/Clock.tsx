import { createEffect, createSignal } from "solid-js";

export default function Clock(props: { class?: string }) {
  const [time, setTime] = createSignal<Date>(new Date());
  createEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <span class={props.class}>
      {time().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
    </span>
  );
}
