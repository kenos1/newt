import { Match, Switch } from "solid-js";
import { ItemActions, SearchItem } from "../lib/search";

export default function Item(props: { item: SearchItem; class?: string }) {
  return (
    <Switch>
      <Match when={props.item.action === ItemActions.Link}>
        {/* @ts-ignore */}
        <a class={props.class} href={props.item.url}>
          <img
            src={
              // @ts-ignore
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
        {/* @ts-ignore */}
        <button class={props.class} onClick={() => props.item.callback()}>
          {props.item.name}
        </button>
      </Match>
    </Switch>
  );
}
