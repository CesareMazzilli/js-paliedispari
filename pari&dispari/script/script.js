var sceltaUtente = prompt('Vuoi pari o dispari?');
console.log('Hai scelto: ' + sceltaUtente);

var numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log('Il tuo numero è: '+ numeroUtente);

var numeroComputer = generaRandom(1, 5);
console.log('Il numero del pc è: ' + numeroComputer);

var somma = numeroUtente + numeroComputer;
console.log('La somma fa: ' + somma);

var vincitore = valutaVincitore(somma, sceltaUtente);
if(vincitore == 'utente') {
    console.log('Hai vinto!');
} else {
    console.log('Ha vinto il computer!');
}
