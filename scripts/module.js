const MODULE_ID = "combat-theme-expansion-pack";
Hooks.once("init", async function () {
  for (const theme of COMBAT_THEMES) {
    CONFIG.Combat.sounds[theme.id] = {
      label: `${MODULE_ID}.themes.${theme.id}`,
      startEncounter: getSoundPaths(theme.startEncounter, theme.id),
      nextUp: getSoundPaths(theme.nextUp, theme.id),
      yourTurn: getSoundPaths(theme.yourTurn, theme.id),
    };
  }
});

function getSoundPaths(soundPathArray, id) {
  return soundPathArray.map(
    (sound) => `modules/${MODULE_ID}/assets/themes/${id}/${sound}.ogg`
  );
}

const COMBAT_THEMES = [
  {
    id: "feudal-japan-1",
    startEncounter: ["koto-hit"],
    nextUp: ["furin-japanese-wind-chime"],
    yourTurn: ["shaped-taiko"],
  },
];
