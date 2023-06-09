(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateSignal = (): string => {
    return "Señal activada";
  };

  console.log(typeof activateSignal);

  const heroName = returnName();
})();
