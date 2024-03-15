// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Su internet ci sono soluzioni con join e reverse, non potete usarle!

// chiedere la parola all'utente
const userWord = prompt('Dammi una parola');
console.log(userWord);
// capire se la parola è palindroma
const isUserWordPalindrome = isWordPalindrome(userWord);

if(isUserWordPalindrome) {
    alert('è palindroma');
} else {
    alert('non è palindroma');
}