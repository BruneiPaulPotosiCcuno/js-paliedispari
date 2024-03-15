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

//functios
// Verifico se una parola è palindroma
function isWordPalindrome(word) {
    // ottenere il contrario di word
    let revertedWord = '';
    for(let i = word.length - 1; i >= 0; i--) {
        const thisLetter = word[i];
        revertedWord += thisLetter;
    }

    // se il diversoo è uguale a word allora torna true, altrimenti torna false
    let isPalindrome;
    if(revertedWord === word) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;

}