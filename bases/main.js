"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.name = "";
            this.realName = "";
            this.age = 0;
        }
        mutantPower(id) {
            throw new Error("Method not implemented.");
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: "KY2",
            city: "Ottawa",
        },
        getFullAddress(id) {
            return this.address.id;
        },
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            id: 354,
            zip: "SDF",
            city: "Toronto",
        },
        getFullAddress(id) {
            return this.address.id;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map