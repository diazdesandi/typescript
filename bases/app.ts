// Ejercicio #1
/*
(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  // const fuerzaFlash = 5;
  // const fuerzaSuperman = 100;
  // const fuerzaBatman = 1;
  // const fuerzaAcuaman = 0;

  enum fuerza {
    aquaman = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }

  const fuerzaFlash: fuerza = fuerza.flash;
  const fuerzaSuperman: fuerza = fuerza.superman;
  const fuerzaBatman: fuerza = fuerza.batman;
  const fuerzaAcuaman: fuerza = fuerza.aquaman;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
*/

// Ejercicio 2
/*
// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

const contar = (heroes: string[]): number => {
  return heroes.length;
};
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = (llamar: boolean = true): void => {
  if (llamar) {
    console.log("Batiseñal activada");
  }
};

llamarBatman();

// Rest?
const unirheroes = (...personas: string[]): string => {
  return personas.join(", ");
};

// Tipo funcion
const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
) => {};

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: string[]) => void;
noHaceNadaTampoco = noHaceNada;
*/

// Ejercicio 3
/*
// Tipo carros
(() => {
  type Car = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  };

  // Objetos
  const batimovil: Car = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee: Car = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      // El metodo disparar es opcional
      console.log("Disparando");
    },
  };

  // Tipo villanos

  type villan = {
    nombre: string;
    edad?: number;
    mutante: boolean;
  };

  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos: villan[] = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  // Multiples tipos

  // Tipos charles / apocalipsis

  type Personaje = {
    poder: string;
    estatura: number;
  };

  type Grupo = {
    lider: boolean;
    miembros: string[];
  };

  // cree dos tipos, uno para charles y otro para apocalipsis
  const charles: Personaje = {
    poder: "psiquico",
    estatura: 1.78,
  };

  const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Personaje | Grupo;

  mystique = charles;
  mystique = apocalipsis;
})();
*/

// Ejercicio 5 (no había ejercicio 4)
(() => {
  // Crear interfaces

  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar(): void;
  }

  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Villan {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  const guason: Villan = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason: Villan): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion

  interface Poblacion {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: Poblacion = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

  interface PersonaI {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }
  class Persona implements PersonaI {
    public nombre: string = " ";
    public edad: number = 0;
    public sexo: string = "";
    public estadoCivil: string = "";
    imprimirBio() {
      console.log("");
    }
  }
})();
