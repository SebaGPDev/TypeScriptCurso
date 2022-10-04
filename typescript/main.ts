/*
 * Define a variable in typescript
 */
let texto: string = "texto";
let numero: number = 0;
let bool: boolean = true;
let cualquiera: any = "puedo ser lo que quiera";

/*
 * Constants
 */

const nombre: string = "Sebastian Prieto";

console.log(texto, numero, bool, cualquiera, nombre);

// Arrays
let persona: Array<string> = [];
let personas: string[] = ["Sebastian", "Flor", "Daniel"];
let div_personas : HTMLElement | null = document.querySelector("#person");
personas.map((persone) => {
  div_personas.innerHTML += persone;
});
