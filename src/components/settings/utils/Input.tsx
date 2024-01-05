import { JSXElement } from "solid-js";

export default function Input(props: {
  value: string;
  setter: (value: string) => void;
  children: JSXElement;
}) {
  return (
    <div class="flex flex-row justify-between gap-4">
      <div>{props.children}</div>
      <input
        value={props.value}
        onChange={(e) => props.setter(e.target.value)}
        class="flex w-full p-2 border-white border rounded-md bg-black"
      />
    </div>
  );
}
