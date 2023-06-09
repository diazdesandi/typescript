"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activateSignal = () => {
        return "Señal activada";
    };
    console.log(typeof activateSignal);
    const heroName = returnName();
})();
