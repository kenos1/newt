import { For, createSignal } from "solid-js";
import { setSettingsOpen } from "../../../App";
import SettingsPopup from "../SettingsPopup";
import KeyValue from "../utils/KeyValue";
import { Icon } from "@iconify-icon/solid";
import { getStorage, setStorage } from "../../../lib/localstorage";

export default function LinkSettings() {
  const [links, setLinks] = createSignal(getStorage().links);
  return (
    <SettingsPopup
      title="Links"
      close={() => {
        setStorage({ ...getStorage(), links: links() });
        window.location.reload();
        setSettingsOpen("links", false);
      }}
    >
      <For each={links()}>
        {(item, index) => (
          <KeyValue
            key={item.name}
            keySetter={(v) => {
              const linksCopy = [...links()];
              linksCopy[index()] = {
                name: v,
                url: links()[index()].url,
              };
              setLinks(linksCopy);
            }}
            value={item.url}
            valueSetter={(v) => {
              const linksCopy = [...links()];
              linksCopy[index()] = {
                name: links()[index()].name,
                url: v,
              };
              setLinks(linksCopy);
            }}
            after={
              <Trash
                links={links()}
                linkSetter={(v) => {
                  setLinks(v);
                }}
                index={index()}
              />
            }
          />
        )}
      </For>
      <New links={links()} linkSetter={(v) => setLinks(v)} />
    </SettingsPopup>
  );
}

function New(props: {
  links: { name: string; url: string }[];
  linkSetter: (v: { name: string; url: string }[]) => void;
}) {
  return (
    <button
      onClick={() => {
        const linksCopy = [...props.links];
        linksCopy.push({
          name: "New Link",
          url: "https://example.com",
        });
        props.linkSetter(linksCopy);
      }}
      class="bg-blue-700 p-2 rounded-md flex flex-row gap-4 w-full"
    >
      <Icon
        icon="carbon:add"
        class="w-6 h-6 my-auto"
        width="1.5rem"
        height="1.5rem"
      />
      <span>New Link</span>
    </button>
  );
}

function Trash(props: {
  links: { name: string; url: string }[];
  linkSetter: (v: { name: string; url: string }[]) => void;
  index: number;
}) {
  return (
    <button
      onClick={() => {
        const linksCopy = [...props.links];
        linksCopy.splice(props.index);
        props.linkSetter(linksCopy);
      }}
      class="bg-red-700 h-full p-4 rounded-md"
    >
      <Icon
        icon="carbon:trash-can"
        class="w-6 h-6 my-auto"
        width="1.5rem"
        height="1.5rem"
      />
    </button>
  );
}
