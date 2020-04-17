// chiedo all'utente qual è il suo nome
var nome_utente = prompt('Qual è il tuo nome?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(nome_utente);


// chiedo all'utente qual è il suo cognome
var cognome_utente = prompt('Qual è il tuo cognome?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(cognome_utente);


// chiedo all'utente il suo colore preferito
var colore_utente = prompt('Qual è il tuo colore preferito?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(colore_utente);

// concateno i vari valori ottenuti e li visualizzo in pagina e in console
var password_generata = nome_utente + cognome_utente + colore_utente + '20'
// inserisco nello span che ho predisposto nell'html il nome dell'utente
document.getElementById('password').innerHTML = password_generata;
