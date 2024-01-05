import { setSettingsOpen } from "../../../App";
import SettingsPopup from "../SettingsPopup";

export default function About() {
  return (
    <SettingsPopup
      title="About Newt"
      close={() => setSettingsOpen("about", false)}
    >
      <h1>NEWT</h1>
      <h2>
        Made by <a href="https://kenos.codeberg.page">Kenos</a>
      </h2>
    </SettingsPopup>
  );
}
