(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;
  /*
  En JS esta permitido y regresaría undefined
  let isSuperman: boolean;
  console.log(isSuperman)
  */

  /*
  Poner la variable entre {} imprime el 
  nombre de la variable con el valor
    > {isBatman: false}
  */

  isSuperman = isBatman ? true : false;

  console.log({ isSuperman });
})();
