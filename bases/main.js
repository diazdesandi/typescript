"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500,
    };
    const printAvenger = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision, rest);
    };
    const avengersArr = ["Cap. América", "IronMan", "Hulk"];
    const [, ironman] = avengersArr;
})();
(() => {
    const ironman = {
        name: "IronMan",
        weapon: "Armorsuit",
    };
    const captAmerica = {
        name: "Capitan America",
        weapon: "Shield",
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir",
    };
    const avengers = [ironman, thor, captAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
() => {
    const a = "Fernando";
    const getName = () => {
        console.log("viejo getName");
    };
};
//# sourceMappingURL=main.js.map