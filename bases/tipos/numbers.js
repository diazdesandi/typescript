"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villains = 20;
    if (avengers < villains) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Salvados");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map