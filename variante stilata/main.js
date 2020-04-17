// chiedo all'utente qual è il suo nome
var nome_utente = prompt('Qual è il tuo nome? (non inserire il cognome)');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(nome_utente);
// visualizzo in pagina
document.getElementById('nome-password').innerHTML = nome_utente;



// chiedo all'utente qual è il suo cognome
var cognome_utente = prompt('Qual è il tuo cognome?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(cognome_utente);
// visualizzo in pagina
document.getElementById('cognome-password').innerHTML = cognome_utente;



// chiedo all'utente il suo colore preferito
var colore_utente = prompt('Qual è il tuo colore preferito?');

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(colore_utente);
// visualizzo in pagina
document.getElementById('colore-password').innerHTML = colore_utente;



// concateno i vari valori ottenuti INSIEME a 20 e li visualizzo in pagina e in console
var password_completa = '20';

// verifico di aver letto l'input dell'utente stampando in console il contenuto del variabile
console.log(password_completa);
// visualizzo in pagina
document.getElementById('anno-password').innerHTML = password_completa;
