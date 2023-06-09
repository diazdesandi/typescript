(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveWorld = () => `Mundo salvado`;

  // Tipo function.
  //   let myFunction: Function;
  // Se establece que es del tipo Function y regresa un número
  //   let myFunction: (y: number, z: number) => number;
  let myFunction: (y: string) => string;

  // Se asigna función, se pasa la referencia
  //   myFunction = addNumbers;
  //   console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction("test"));

  //   myFunction = saveWorld;
  //   console.log(myFunction());
})();
