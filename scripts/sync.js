import moduleJson from "../module.json" with { type: "json" };
const MODULE_ID = moduleJson.id;

export function setupSyncHooks() {
  if (
    !game.user.isGM &&
    game.settings.get(MODULE_ID, "combat-theme") !== "" &&
    game.settings.get(MODULE_ID, "combat-theme") !==
      game.settings.get("core", "combatTheme")
  ) {
    if (!game.settings.get(MODULE_ID, "sync")) return;
    game.settings.set(
      "core",
      "combatTheme",
      game.settings.get(MODULE_ID, "combat-theme")
    );
  }

  if (game.settings.get(MODULE_ID, "combat-theme") === "" && game.user.isGM) {
    if (!game.settings.get(MODULE_ID, "sync")) return;
    const theme = game.settings.get("core", "combatTheme");
    game.settings.set(MODULE_ID, "combat-theme", theme);
    window[MODULE_ID].socket.executeForOthers("updateCombatTheme", theme);
  }

  Hooks.on("clientSettingChanged", (setting, value) => {
    if (setting === "core.combatTheme" && game.user.isGM) {
      if (!game.settings.get(MODULE_ID, "sync")) return;
      game.settings.set(MODULE_ID, "combat-theme", value);
      window[MODULE_ID].socket.executeForOthers("updateCombatTheme", value);
    }
  });

  // Style tracker to show it syncs
  Hooks.on("renderCombatTrackerConfig", (_cfg, html) => {
    if (!game.settings.get(MODULE_ID, "sync")) return;
    const themeHTML = html.querySelector('.form-group[data-setting-id="core.combatTheme"] label');
    themeHTML?.classList?.add('combat-theme-expansion-sync');
    themeHTML.dataset.tooltip = game.i18n.localize(`${MODULE_ID}.tooltip.synced`)
  })
}
