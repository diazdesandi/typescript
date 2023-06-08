"use strict";
(() => {
    // never no es undefined ni void
    // never corta la ejecución del código,
    // usualmente va a terminar en un error
    const error = (message) => {
        // if(false)
        throw new Error(message);
    };
    error("Auxilio");
    console.log("Hola mundo");
})();
