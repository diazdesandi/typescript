(() => {
  class Avenger {
    // Se vuelve innecesario al usar la forma corta de asignar propiedades
    // private name: string;
    // public team: string;
    // public realName?: string;

    // Para acceder a la propiedad estatica se hace
    // Avenger.avgAge
    // Se puede acceder a el haciendo una referencia de la clase sin crear una instancia
    static avgAge: number = 35;

    // this.name regresa el nombre de la clase
    static getAvgAge() {
      return this.name;
    }

    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    // Forma corta de asignar propiedades
    constructor(
      private name: string,
      public team: string,
      public realName: string
    ) {}

    // Metodos
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "A");

  console.log(antman);
  console.log(antman.bio());
  console.log(Avenger.getAvgAge());
})();
