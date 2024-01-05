import { Match, Switch } from "solid-js";
import { ItemActions, SearchItem } from "../lib/search";

export default function Item(props: { item: SearchItem; class?: string }) {
  return (
    <Switch>
      <Match when={props.item.action === ItemActions.Link}>
        {/* @ts-expect-error Typescript is dumb and doesn't understand context */}
        <a class={props.class} href={props.item.url}>
          <img
            src={
              // @ts-expect-error Typescript is dumb and doesn't understand context
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
        {/* @ts-expect-error Typescript is dumb and doesn't understand context */}
        <button class={props.class} onClick={() => props.item.callback()}>
          {props.item.name}
        </button>
      </Match>
    </Switch>
  );
}
