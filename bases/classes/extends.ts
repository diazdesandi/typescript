(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado");
    }

    // Private significa que solo se puede acceder desde la clase que se utiliza
    // Procted da acceso dentro de clases que se extiendad de la clase padre.
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    // Agregando public variable: tipo en el constructor
    // se crearía la propiedad otra vez
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    // Getters & Setters
    // getter no recibe ningún argumento
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // Set tiene que recibir un argumento, no regresa nada.
    set fullName(name: string) {
      this.name = name;
    }

    // Accediento al método getFullName de la clase Avenger
    getFullNameXmen() {
      // Al ser privada no se puede acceder a getFullName,
      // en su lugar se puede utilizar protected
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  console.log(wolverine);

  //   wolverine.getFullNameXmen();

  // Getters no se ejecutan, solo se mandan llamar
  //   console.log(wolverine.fullName);

  // Setter
  wolverine.fullName = "Fernando";
  console.log(wolverine.fullName);
})();
