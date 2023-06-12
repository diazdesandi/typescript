import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu";

// charmander.savePokemonToDB(50);

charmander.publicApi = "https://www.google.com";

console.log(charmander);
