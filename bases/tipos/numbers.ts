(() => {
  let avengers: number = 10;
  console.log(avengers);

  const villains: number = 20;

  // Permitido en JavaScript si alguna
  // de las variables no tiene valor
  if (avengers < villains) {
    console.log("Estamos en problemas");
  } else {
    console.log("Salvados");
  }

  // 55Ase convierte en NaN lo cual es un número en JS.
  avengers = Number("55A");
  console.log({ avengers });
})();
