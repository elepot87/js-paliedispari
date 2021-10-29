// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Utente scrive se pari o dispari
const userChoice = prompt("Scrivi se preferisci pari o dispari");

let userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
// Validazione del dato inserito dall'utente, finché non lo inserisce correttamente

while (isNaN(userNum) || userNum < 1 || userNum > 5) {
  userNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

// Stampiamo nel DOM la scelta dell'utente
const printUserChoice = (document.querySelector(
  ".utente"
).innerHTML = `La scelta dell'utente è ${userNum}`);

// Il computer deve generare una funzione che crei un numero random da 1 a 5, richiamando una funzione
const computerChoice = getRandom();

// Stampiamo nel DOM il numero generato dal computer

const printComputerChoice = (document.querySelector(
  ".computer"
).innerHTML = `La scelta del computer è ${computerChoice}`);

// Sommiamo i due numeri
const numAddition = computerChoice + userNum;

const printAddition = (document.querySelector(
  ".somma"
).innerHTML = `La scelta del computer è ${numAddition}`);

// Stabiliamo se la somma ottenuta è un numero pari o dispari

const resultGame = evenOdd(numAddition);

/**************************
Funzioni
**************************/

function getRandom() {
  const rand = Math.floor(Math.random() * 5) + 1;
  return rand;
}

function evenOdd(num) {
  let result;
  if (num % 2 == 0) {
    document.querySelector(".risultato").innerHTML =
      "La somma ottenuta è un numero pari";
  } else {
    document.querySelector(".risultato").innerHTML =
      "La somma ottenuta è un numero dispari";
  }
  return result;
}
