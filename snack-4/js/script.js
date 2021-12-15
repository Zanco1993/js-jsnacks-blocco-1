// snack-4
// Chiedi un numero di 4 cifre all’utente e 
// calcola la somma di tutte le cifre che compongono il numero.

// chiedo all'utente un numero e poi cambio il tipo in stringa 
// assegandolo in una nuova variabile

let numUser = parseInt(prompt("Inserisci un numero di 4 cifre"))
let listNumber = numUser.toString()
let somma = 0

//se l'utente inserisce un numero di 4 cifre allora esegui il for
//altrimenti esci
if (numUser === 4) {
    for (let i = 0; i < listNumber.length; i++){
        //utilizzo il parseInt altrimenti concatenerebbe la stringa 
        //invece del numero
        somma += parseInt(listNumber[i]);
    }

    console.log(`La somma delle cifre che compongono il numero è ${somma}`);
    
} else {
    console.log("Attenzione, devi inserire un numero di 4 cifre");
} 

