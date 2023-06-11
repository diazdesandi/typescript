import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction("Hola mundo"));

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow("Hola mundo"));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
