const MODULE_ID = "combat-theme-expansion-pack";
Hooks.once("init", async function () {
  for (const theme of COMBAT_THEMES) {
    CONFIG.Combat.sounds[theme.id] = {
      label: `${MODULE_ID}.themes.${theme.id}`,
      startEncounter: theme.startEncounter,
      nextUp: theme.nextUp,
      yourTurn: theme.yourTurn,
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
    startEncounter: ["shaped-taiko"],
    nextUp: ["furin-japanese-wind-chime"],
    yourTurn: ["koto-hit"],
  },
];
