import { createSignal } from "solid-js";
import { setSettingsOpen } from "../../../App";
import { getStorage, setStorage } from "../../../lib/localstorage";
import SettingsPopup from "../SettingsPopup";
import Toggle from "../utils/Toggle";
import Input from "../utils/Input";

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
      <Toggle
        bool={config().date}
        setter={() => setConfig({ ...config(), date: !config().date })}
      >
        Enable Date Widget
      </Toggle>
    </SettingsPopup>
  );
}
