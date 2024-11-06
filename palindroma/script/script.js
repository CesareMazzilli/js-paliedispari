function rovesciaStringa(parola) {
    
    var parolaArray = parola.split('');
    
    var parolaArrayRovescio = parolaArray.reverse();
    
    var parolaRovescia = parolaArrayRovescio.join('');
   
    return parolaRovescia;
}

function isPalindroma(parola) {
   
    if(parola == rovesciaStringa(parola)) {
       
        return true;
    } else {
       
        return false;
    }
}

var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);

if(isPalindroma(parolaUtente)) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}