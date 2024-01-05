import { JSXElement } from "solid-js";

export default function Toggle(props: {
  bool: boolean;
  setter: () => void;
  children: JSXElement;
}) {
  return (
    <div class="flex flex-row justify-between gap-4">
      <div>{props.children}</div>
      <button
        class={`transition-colors rounded-md relative block w-16 h-8 outline-white outline ${
          props.bool ? "bg-blue-700" : "bg-black"
        }`}
        onClick={() => props.setter()}
      >
        <span
          class={`transition-transform absolute bg-white top-0 left-0 w-8 h-8 rounded-md ${
            props.bool ? "translate-x-8" : ""
          }`}
        />
      </button>
    </div>
  );
}
