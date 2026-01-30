const { numberOfLettersInAlphabet } = require("../01-numbers/script");

let nome;
nome = "ernesto";
console.log(nome);


// 2. Tipi primitivi
const number = 8;
const text = "prova"
const bool = "true"
console.log(number);
console.log(text);
console.log(bool);


// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA



const fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Jane Smith"

console.log(numberOfLettersInAlphabet); // Output: 26