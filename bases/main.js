"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger("Antman", "Capitan", "A");
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        getFullNameXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine);
    wolverine.getFullNameXmen();
})();
//# sourceMappingURL=main.js.map