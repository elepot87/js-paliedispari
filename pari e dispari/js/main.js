// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const btnComputer = getRandom();
console.log(btnComputer);

// btnComputer.addEventListener('click', function {

// })

/**************************
Funzioni
**************************/

function getRandom() {
  const rand = Math.floor(Math.random() * 5) + 1;
  return rand;
}
