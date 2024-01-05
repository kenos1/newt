import { NewtConfig, defaultConfig } from "./config";

export const NEWT_CONFIG_KEY = "newt-config";

export function getStorage(): NewtConfig {
  const item = window.localStorage.getItem(NEWT_CONFIG_KEY);
  if (!item) {
    setStorage(defaultConfig);
  }
  return JSON.parse(item ?? JSON.stringify(defaultConfig));
}

export function setStorage(config: NewtConfig) {
  window.localStorage.setItem(NEWT_CONFIG_KEY, JSON.stringify(config));
}
