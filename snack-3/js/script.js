//snack-3 Stampa le potenze di 2 fino a 1000.

// Primo metodo
//stampiamo tutti i numeri da 0 a 1000 compreso e 
//ogni numero sarà l'esponente di 2

// let result = 0;
// let i = 0;
// while (i <= 1000) {
//     result = Math.pow(2, i);
//     console.log(result);
//     i++;
// }


// Secondo metodo
//creiamo una variabile result che immagazzini il risultato ad ogni giro
// se il risultato è maggiore di 1000 allora esci dal ciclo e non stamparlo 
// nel console
// i rappresenta l'esponente

let result = 0;
let i = 0;
while (i <= 1000) {
    result = Math.pow(2, i);
    if (result > 1000) {
        break;
    }
    console.log(result);
    i++;
}