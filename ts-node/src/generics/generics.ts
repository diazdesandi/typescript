//

export const printObject = (argument: any) => {
  console.log(argument);
};

// Se utiliza <T> para definir que es del tipo genérico
export function genericFunction<T>(argument: T): T {
  return argument;
}

// export const genericFunctionArrow = <T>(argument: T) => {
//     return argument
// }
export const genericFunctionArrow = <T>(argument: T) => argument;
