// Stampa il cubo di ciascuno dei primi N numeri,
// dove N è un numero indicato dall’utente. 
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)

//utilizziamo la funzione Math.pow per ottenere il cubo di un numero

// dichiato le variabili numUser e cube che ciclerà e stamperà ad 
// ogni ciclo la sua potenza di 3 in base alla posizione

let numUser = parseInt(prompt("Digita un numero"));
let cube = 0

for(i = 0; i < numUser; i++){
    cube = console.log(Math.pow(i, 3));
}