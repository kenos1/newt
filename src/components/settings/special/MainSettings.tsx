import { createSignal } from "solid-js";
import { setSettingsOpen } from "../../../App";
import { getStorage, setStorage } from "../../../lib/localstorage";
import SettingsPopup from "../SettingsPopup";
import Toggle from "../utils/Toggle";
import Input from "../utils/Input";
import { defaultConfig } from "../../../lib/config";
import { Icon } from "@iconify-icon/solid";

export default function MainSettings() {
  const [config, setConfig] = createSignal(getStorage().settings);
  return (
    <SettingsPopup
      title="Settings"
      close={() => {
        setStorage({ ...getStorage(), settings: config() });
        window.location.reload();
        setSettingsOpen("main", false);
      }}
    >
      <Input
        value={config().background}
        setter={(v) => setConfig({ ...config(), background: v })}
      >
        Background Image URL
      </Input>
      <Input
        value={config().searchEngine}
        setter={(v) => setConfig({ ...config(), searchEngine: v })}
      >
        Search engine ("%s" is replaced with query)
      </Input>
      <Input
        value={config().results.toString()}
        type="number"
        setter={(v) => setConfig({ ...config(), results: parseInt(v) })}
      >
        Maximum amount of items from search
      </Input>
      <Toggle
        bool={config().date}
        setter={() => setConfig({ ...config(), date: !config().date })}
      >
        Enable Date Widget
      </Toggle>
      <button class="transition-colors p-2 flex flex-row gap-4 bg-black hover:bg-red-700 rounded-md" onClick={() => {
        if (window.confirm("Are you sure you want to reset your settings? This will reset everything except your links!")) {
          setStorage({...getStorage(), settings: defaultConfig.settings});
          window.location.reload();
        }
      }}>
        <Icon
          icon="carbon:warning-alt"
          class="icon"
          width="1.5rem"
          height="1.5rem"
        />
        <span>Factory Reset Settings</span>
      </button>
    </SettingsPopup>
  );
}
