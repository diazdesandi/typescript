(() => {
  // En objetos no importa el orden de sus propiedades
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  //   flash = {
  //     name: "Clark Kent",
  //     age: 60,
  //     powers: ["Super fuerza"],
  //     getName() {
  //       return this.name;
  //     },
  //   };
  let superman: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super velocidad"],
  };

  console.log(flash);
})();
