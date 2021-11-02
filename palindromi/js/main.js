// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt("Inserisci una parola");

const userReversed = reverseChars(userWord);

if (userWord == userReversed) {
  alert("La parola inserita è un palindromo");
} else {
  alert("La parola inserita non è un palindromo!");
}

/************************+
Funzioni
 *************************/
// Funzione con ciclo for
// function reverseChars(word) {
//   let reverse = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     // console.log(word[i]);
//     reverse += word[i];
//   }

//   return reverse;
// }

function reverseChars(word) {
  return word.split("").reverse().join("");
}
