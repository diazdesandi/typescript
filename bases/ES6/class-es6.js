(() => {
  class Avenger {
    constructor(name = "No name", power = 123) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    constructor(name, power) {
      // super es el super constructor de la clase padre
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9000);
  const falcon = new FlyingAvenger("Falcon", 50);

  console.log(hulk);
  console.log(falcon);
})();
