import { Match, Switch } from "solid-js";
import { ItemActions, SearchItem } from "../lib/search";
import { Icon } from "@iconify-icon/solid";

export default function Item(props: { item: SearchItem; class?: string }) {
  return (
    <Switch>
      <Match when={props.item.action === ItemActions.Link}>
        {/* @ts-expect-error Me when Ts doesn't understand context */}
        <a class={props.class} href={props.item.url}>
          <img
            src={
              /* @ts-expect-error Me when Ts doesn't understand context */
              `https://icons.duckduckgo.com/ip3/${props.item.url.replace(
                "https://",
                "",
              )}.ico`
            }
            class="icon"
          />
          {props.item.name}
        </a>
      </Match>
      <Match when={props.item.action === ItemActions.Setting}>
        {/* @ts-expect-error Me when Ts doesn't understand context */}
        <button class={props.class} onClick={() => props.item.callback()}>
          <Icon
            icon="carbon:settings"
            class="icon"
            width="1.5rem"
            height="1.5rem"
          />
          {props.item.name}
        </button>
      </Match>
      <Match when={props.item.action === ItemActions.Search}>
        {/* @ts-expect-error Me when Ts doesn't understand context */}
        <a class={props.class} href={props.item.url}>
          <Icon
            icon="carbon:search"
            class="icon"
            width="1.5rem"
            height="1.5rem"
          />
          {props.item.name}
        </a>
      </Match>
    </Switch>
  );
}
