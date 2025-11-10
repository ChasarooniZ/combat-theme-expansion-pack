import moduleJson from "../module.json" with { type: "json" };
const MODULE_ID = moduleJson.id;

async function updateCombatTheme(theme) {
  game.settings.set("core", "combatTheme", theme);
}

export const setupSocket = () => {
  // Initialize module namespace
  if (!window[MODULE_ID]) {
    window[MODULE_ID] = {};
  }
  if (socketlib) {
    window[MODULE_ID].socket = socketlib.registerModule(MODULE_ID);
    window[MODULE_ID].socket.register("updateCombatTheme", updateCombatTheme);
  }
  return !!socketlib;
};
