import moduleJson from "../module.json" with { type: "json" };
const MODULE_ID = moduleJson.id;

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
    config: true,
    default: true,
    type: Boolean,
  });
}
