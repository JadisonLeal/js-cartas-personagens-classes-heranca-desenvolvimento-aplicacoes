import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', 6, 'fogo', 7, 8);
const arqueiroMarcos = new Arqueiro('Marcos', 5, 2)
const arqueiroMagoChico = new ArqueiroMago('Chico', 6, 5, 'ar', 7, 11);
const guerreiroJoao = new Guerreiro('Joao', 8);

// arqueiroMarcos.#level = 15

const personagens = [magoAntonio, arqueiroMarcos, arqueiroMagoChico, guerreiroJoao];

new PersonagemView(personagens).render(); 

console.log(Personagem.verificarVencedor(arqueiroMarcos, magoAntonio))

console.log(arqueiroMarcos);

