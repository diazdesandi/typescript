// Decoradores
// Editar tsconfig.json
// "experimentalDecorators": true
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// Se tiene que especificar que regresa una función.
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  // seal previene la modificación del objeto
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Decorador para métodos
// Factory Decorator
function CheckValidId() {
  // Target es el objetivo (en este caso la clase Pokemon)
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      id < 1 || id > 800
        ? console.error("ID debe estar entre 1 y 800")
        : originalMethod(id);
    };
    // descriptor.value = () => console.log("Hola mundo");
  };
}

// Decorador de solo lectura
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    // Creamos PropertyDescriptor
    const descriptor: PropertyDescriptor = {
      get() {
        // Cada vez que se intenta acceder a la propiedad se dispara otra vez
        console.log(this, "get");
        return "Fernando";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          // bloque la reescritura
          writable: !isWritable,
          // enumerable es para que no se pueda observar
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

// Código se ejecuta sin tener ninguna instancia
// @printToConsole
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {
  @readonly()
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado ${id}`);
  }
}
