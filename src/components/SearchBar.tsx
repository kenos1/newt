import { Accessor, Setter } from "solid-js";
import { Icon } from "@iconify-icon/solid";

export default function SearchBar(props: {
  query: Accessor<string>;
  setQuery: Setter<string>;
  placeholder?: string;
  class?: string;
}) {
  return (
    <div class={`flex flex-row gap-2 w-full ${props.class}`}>
      <Icon class="icon" width="1.5rem" height="1.5rem" icon="carbon:search" />
      <input
        class="flex w-full border-none focus:border-none focus:outline-none focus:ring-none bg-transparent"
        onInput={(e) => props.setQuery(e.target.value)}
        placeholder={props.placeholder}
        autofocus
      />
    </div>
  );
}
