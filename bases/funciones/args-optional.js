"use strict";
(() => {
    // Para que el argumento sea opcional se agrega ?
    // pero al no enviarse sería undefined
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "Sin apellido"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
