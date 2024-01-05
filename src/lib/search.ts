import { IFuseOptions } from "fuse.js";
import { getStorage } from "./localstorage";
import { setSettingsOpen } from "../App";

export enum ItemActions {
  Link,
  Setting,
}

export type SearchItem = {
  name: string;
  action: ItemActions;
} & (
  | {
      action: ItemActions.Link;
      url: string;
    }
  | {
      action: ItemActions.Setting;
      callback: () => unknown;
    }
);

export const LIST: SearchItem[] = [
  ...getStorage().links.map(
    (link): SearchItem => ({
      name: link.name,
      action: ItemActions.Link,
      url: link.url,
    }),
  ),
  {
    name: "Settings",
    action: ItemActions.Setting,
    callback: () => setSettingsOpen("main", true),
  },
  {
    name: "Manage Links",
    action: ItemActions.Setting,
    callback: () => setSettingsOpen("links", true),
  },
  {
    name: "About Newt",
    action: ItemActions.Setting,
    callback: () => setSettingsOpen("about", true),
  },
];

export const FUSE_SETTINGS: IFuseOptions<unknown> = {
  keys: ["url", "name"],
};
