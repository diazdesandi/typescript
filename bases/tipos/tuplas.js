"use strict";
(() => {
    // Declaración de tupla
    //   const hero: [string, number] = ["Dr Strange", 100];
    const hero = ["Dr Strange", 100, true];
    hero[0] = "Iron Man";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
