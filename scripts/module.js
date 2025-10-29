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
  {
    id: "horror-1",
    startEncounter: [
      "cabin-in-woods-01",
      "cabin-in-woods-02",
      "cabin-in-woods-03",
    ],
    nextUp: [
      "something-in-basement-01",
      "something-in-basement-02",
      "something-in-basement-03",
      "something-in-basement-04",
    ],
    yourTurn: [
      "metal-strike-01",
      "metal-strike-02",
      "metal-strike-03",
      "metal-strike-04",
      "metal-strike-05",
    ],
  },
  {
    id: "dark-synth-1",
    startEncounter: ["synth-ominous-c"],
    nextUp: ["synth-swell-a", "synth-swell-b", "synth-swell-c"],
    yourTurn: ["synth-ominous-a"],
  },
];
