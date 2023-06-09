"use strict";
(() => {
    // Argumentos opcionales al final
    // Error: A required parameter cannot follow an optional parameter
    const fullName = (firstName, upper = false, lastName) => {
        const mergedName = `${firstName} ${lastName || "----"}`;
        if (upper)
            return mergedName.toUpperCase();
        else
            return mergedName;
    };
    const name = fullName("Tony", true, "Stark");
    console.log({ name });
})();
