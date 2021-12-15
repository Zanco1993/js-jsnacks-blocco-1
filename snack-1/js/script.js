// snack-1 Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti

// dichiaro 2 variabili che si aggiorneranno man mano che ciclano

let somma = 0;
let numUser = 0;

// chiedo all'utente di digitare un numero dentro ad un ciclo for

for(let i = 0; i < 10; i++){
    numUser = parseInt(prompt("Inserisci un numero: "));
    somma += numUser;
}

//stampa la somma dei numeri inseriti dall'utente

console.log(`La somma dei numeri inseriti dall'utente risulta: ${somma}`);
