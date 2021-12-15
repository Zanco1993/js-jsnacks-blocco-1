// snack-5
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50.


let listNumber = [];
let somma = 0;
let num;

do {
   num = parseInt(prompt("Inserisci un numero"));
   listNumber.push(num);
   somma += parseInt(listNumber);   

} while (somma < 50);

console.log("La somma ha superato il 50!");

