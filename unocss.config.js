import { defineConfig, presetUno, presetWind } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
  shortcuts: {
    "icon": "w-6 h-6 my-auto"
  },
  presets: [presetUno(), presetWind(), presetForms({
    strategy: "base"
  })],
});
