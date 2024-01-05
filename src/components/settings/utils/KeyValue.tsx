import { JSXElement } from "solid-js";

export default function KeyValue(props: {
  key: string;
  keySetter: (value: string) => void;
  value: string;
  valueSetter: (value: string) => void;
  before?: JSXElement;
  after?: JSXElement;
}) {
  return (
    <div class="flex flex-row gap-4">
      <div>{props.before}</div>
      <div class="grid grid-cols-2 w-full">
        <input
          value={props.key}
          onInput={(e) => props.keySetter(e.target.value)}
          class="rounded-l-md border-x border-l border-white bg-black p-2"
        />
        <input
          value={props.value}
          onInput={(e) => props.valueSetter(e.target.value)}
          class="rounded-r-md border-x border-r border-white bg-black p-2"
        />
      </div>
      <div>{props.after}</div>
    </div>
  );
}
