// creo un array in cui genero 16 numeri diversi tra loro, che saranno le bombe
var bombe = [];

while (bombe.length < 16) {
  numeroGenerato = (Math.floor(Math.random() * 100) + 1);
    if (!bombe.includes(numeroGenerato)) {
      bombe.push(numeroGenerato)
    }
}

console.log(bombe);

// chiedo all'utente di inserire 86 numeri da confrontare con l'array bombe
var numeriUtente = []

while (numeriUtente.length < 84) {
  numeroUtente = parseInt(prompt("Scegli un numero da 1 a 100"))
  // se il numero rispetta i requisiti viene salvato e il ciclo continua
  if (!isNaN(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 100 && !bombe.includes(numeroUtente) && !numeriUtente.includes(numeroUtente)) {
    numeriUtente.push(numeroUtente)
    // se il numero è una delle sedici bombe il gioco si interrompe
  } else if (bombe.includes(numeroUtente)) {
    alert("Hai perso!")
    break
    // se il numero non rispetta i requisiti avverto l'utente dell'errore
  } else {
    alert("Errore! Dammi un numero da 1 a 100")
  }
  // a fine ciclo while, quindi se l'utente non ha selezionato bombe, comunico la vittoria
  alert("Hai vinto!")
}

// stampo il risultato
document.getElementById("punteggio").innerHTML = numeriUtente.length
