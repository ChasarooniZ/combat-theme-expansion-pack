import { id as MODULE_ID } from "../module.json";

export function registerSettings() {
  game.settings.register(MODULE_ID, "combat-theme", {
    name: "",
    hint: "",
    scope: "world",
    config: false,
    default: "",
    type: String,
  });

  game.settings.register(MODULE_ID, "sync", {
    name: `${MODULE_ID}.module-settings.sync.name`,
    hint: `${MODULE_ID}.module-settings.sync.hint`,
    scope: "world",
    config: false,
    default: true,
    type: Boolean,
  });
}
