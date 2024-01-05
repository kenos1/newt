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
        class={`transition-colors rounded-md relative block w-20 h-10 border-white border ${
          props.bool ? "bg-red" : "bg-black"
        }`}
        onClick={() => props.setter()}
      >
        <span
          class={`transition-transform absolute bg-white top-0 left-0 w-10 h-10 rounded-md ${
            props.bool ? "translate-x-10" : ""
          }`}
        />
      </button>
    </div>
  );
}
