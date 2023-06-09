"use strict";
(() => {
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
//# sourceMappingURL=args-default.js.map