import { For, Show, createMemo, createSignal } from "solid-js";
import Clock from "./components/Clock";
import SearchBar from "./components/SearchBar";
import Fuse from "fuse.js";
import { FUSE_SETTINGS, ItemActions, LIST } from "./lib/search";
import Item from "./components/Item";
import Date from "./components/Calendar";
import MainSettings from "./components/settings/special/MainSettings";
import { getStorage } from "./lib/localstorage";
import { createStore } from "solid-js/store";
import LinkSettings from "./components/settings/special/LinkSettings";
import About from "./components/settings/special/About";

export const [settingsOpen, setSettingsOpen] = createStore({
  main: false,
  links: false,
  about: false,
});

export default function App() {
  const config = getStorage();
  const fuse = new Fuse(LIST, FUSE_SETTINGS);
  const [query, setQuery] = createSignal("");
  const results = createMemo(() =>
    fuse.search(query()).slice(0, config.settings.results - 1),
  );
  return (
    <div
      class="min-w-screen min-h-screen bg-cover bg-fixed bg-center"
      style={{ "background-image": `url("${config.settings.background}")` }}
      onKeyDown={(e) => {if (e.key=== "enter") window.location.reload;}}
    >
      <div class="min-w-screen min-h-screen bg-black/75 backdrop-blur-sm">
        <Show when={settingsOpen.main}>
          <MainSettings />
        </Show>
        <Show when={settingsOpen.links}>
          <LinkSettings />
        </Show>
        <Show when={settingsOpen.about}>
          <About />
        </Show>
        <main class="max-w-screen-lg mx-auto p-4 flex flex-col gap-4 text-lg">
          <Clock class="text-7xl md:mt-50" />
          <Show when={config.settings.date}>
            <Date />
          </Show>
          <SearchBar
            class="bg-white/20 p-2 border-white border rounded-md"
            placeholder="Search..."
            query={query}
            setQuery={setQuery}
          />
          <Show when={query().length > 0}>
            <For each={results()}>
              {(item) => (
                <Item
                  class="flex flex-row gap-4 text-left w-full p-2 rounded-md hover:bg-white/20"
                  item={item.item}
                />
              )}
            </For>
            <Item class="flex flex-row gap-4 text-left w-full p-2 rounded-md hover:bg-white/20" item={{
              action: ItemActions.Search,
              name: `Search ${query()} Online`,
              url: `${config.settings.searchEngine.replace("%s", query())}`
            }} />
          </Show>
        </main>
      </div>
    </div>
  );
}
