(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Lintera verde";
  const volcanNegro: string = `Héroe: Volcán negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No se encuentra");
})();
