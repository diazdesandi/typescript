"use strict";
(() => {
    let customVariable = "";
    customVariable = 20;
    console.log(typeof customVariable);
    customVariable = {
        name: "Bruce",
        age: 43,
        powers: [""],
    };
    // Es del tipo objeto, pero sería un objeto personalizado
    // No existen los tipos en JS.
    console.log(typeof customVariable);
})();
