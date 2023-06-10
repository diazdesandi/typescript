(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "IronMan",
    weapon: "Armorsuit",
  };
  const captAmerica: Avenger = {
    name: "Capitan America",
    weapon: "Shield",
  };
  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, thor, captAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
