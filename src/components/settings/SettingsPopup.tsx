import { JSXElement } from "solid-js";
import { Icon } from "@iconify-icon/solid";

export default function SettingsPopup(props: {
  title: string;
  close: () => unknown;
  children: JSXElement;
}) {
  return (
    <div class="fixed inset-0 w-full h-full bg-black/50 z-1 text-lg">
      <div class="md:my-24 mx-auto h-screen md:h-auto max-w-screen-md bg-black rounded-md">
        <div class="p-4 bg-white/20 rounded-t-md flex flex-row justify-between">
          <span>{props.title}</span>
          <button onClick={() => props.close()}>
            <Icon
              class="icon"
              width="1.5rem"
              height="1.5rem"
              icon="carbon:close"
            />
          </button>
        </div>
        <div class="flex flex-col gap-4 p-4">{props.children}</div>
      </div>
    </div>
  );
}
