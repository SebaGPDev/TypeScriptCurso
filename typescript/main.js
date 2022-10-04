/*
 * Define a variable in typescript
 */
let texto = "texto";
let numero = 0;
let bool = true;
let cualquiera = "puedo ser lo que quiera";
/*
 * Constants
 */
const nombre = "Sebastian Prieto";
console.log(texto, numero, bool, cualquiera, nombre);
// Arrays
let persona = [];
let personas = ["Sebastian", "Flor", "Daniel"];
let div_personas = document.querySelector("#person");
personas.map((persone) => {
    div_personas.innerHTML += persone;
});
