(() => {
  // Constructor privado
  // Patrón Singleton

  class Apocalipsis {
    static instance: Apocalipsis;

    // Al establecer como privado solamente se
    // puede llamar dentro de la clase
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy apocalipsis");
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  //   const apocalipsis = new Apocalipsis("Soy Apocalipsis");
  const apocalipsis = Apocalipsis.callApocalipsis();

  console.log(apocalipsis);
})();
