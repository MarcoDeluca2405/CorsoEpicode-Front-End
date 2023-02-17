/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum;
function Somma(a,b){
  sum=a+b;
  if(sum>9 && sum <21){
    console.log(sum);
    return sum;

  }else{
    console.log("La loro somma non è compresa tra i 10 e i 20");
  }

}
console.log("Somma tra valori");
Somma(5,6);
console.log("_______________________");
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random;
function Random(){
random=Math.floor(Math.random()*21);
console.log(random);

}
console.log("Numeri Causuali tra 0 e 20");
Random();
console.log("_______________________");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me=[
  name="Marco",
  surname="De Luca",
  age=26
]
console.log("Oggetto con paramentri assegnati");
console.log(me);
console.log("_______________________");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Elliminazione del ultimo elemento");
me.pop();
console.log(me);
console.log("_______________________");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Creazione del elemento");
var skills=["html","css","javascript"];
me.push(skills);
console.log(me);
console.log("_______________________");


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Aggiunta al oggetto me nel elemento array skills");
skills.push("Angular");
console.log(me);
console.log("_______________________");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("elliminazione al oggetto me nel elemento array skills");
skills.pop();
console.log(me);
console.log("_______________________");
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function Dice(){
let random=Math.floor(Math.random()*6)+1;
return random;
}

console.log(`Il numero del dato è: ${Dice()}`);
console.log("_______________________");

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoisBigger(a,b){
  if(a>b){
    
    return a;
  }else{}
  return b;
}

console.log(`Scopri il numero piu grande, il numero piu grande è: ${whoisBigger(10,8)}`);
console.log("_______________________");

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(parola){
let array=parola.split(" ");
return array;
}

console.log(splitMe("Piace di conoscerti"));
console.log("_______________________");


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(parola,booleano){
  let nuovaParola;
if(booleano){
nuovaParola=parola.slice(1);
return nuovaParola;

}else{
  let lunghezza=parola.length-1;
nuovaParola=parola.slice(0,lunghezza);
return nuovaParola;

}

}

console.log(deleteOne("ciao",false));
console.log("_______________________");

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("Funzione che rimuove ogni numero al interno della stringa");
function onlyLetters(parola){

return parola.replace(/[0-9]?/g,"");

}
console.log(onlyLetters("pippo 5 santo 6"));
console.log("_______________________");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("Funzione che permmete di verificare se è un email");
function isThisAnEmail(email){
let presente1=email.indexOf("@");
let presente2=email.indexOf(".");

if(presente1!=-1 && presente2!=-1){
  console.log("true");
}else{
  console.log("false");
}

}

isThisAnEmail("Marco_de_luca2405@hotmail.com");
console.log("_______________________");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Restituisce il valore del giorno di oggi");
function whatDayIsIt(){
  let data= new Date();
  console.log(data.getDate());
}
whatDayIsIt();
console.log("_______________________");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Quante volte è lanciato il dato e la loro somma");
function rollTheDices(n){
let array=[];
let sum=0;
for(let i=0;i < n; i++){
let random=Math.floor(Math.random()*6)+1;
sum=sum+random;
array.push(random);
}
console.log(sum);
console.log(array);

}
rollTheDices(4);

console.log("_______________________");

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Restituisce la differenza dal corrente giorno");

function howManyDays(data){
let data1=new Date(data);
let currentData= new Date();
const diff=Math.floor((currentData-data1)/(1000*24*3600));
console.log(diff);

}

howManyDays("2023-02-14");
console.log("_______________________");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Verifica se oggi e il tuo compleanno");
function isTodayMyBirthday(mioCompleanno){
  let data=new Date();
  let M=data.getMonth();
  let G=data.getDay();

 let dataInserita= new Date(mioCompleanno);
 let M2=dataInserita.getMonth();
 let G2=dataInserita.getDay();

  if(M==M2 && G==G2){
    console.log(true);

  }else{
    console.log(false);

  }

}

isTodayMyBirthday("2023-02-17");
console.log("_______________________");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("Restituisce l'oggetto meno la proprietà del oggetto selezionato");

let pet= [{
  "razza":"gatto",
  "eta": 20,
  "colore":"nero"  
},{
  "razza": "Cane",
  "eta": 10,
  "colore": "marrone"
}];
//console.log(pet);
function deleteProp(oggetto,stringa2){

oggetto.map((el,index)=>{
  delete el[stringa2];
})




console.log(oggetto);
return oggetto;
}

deleteProp(pet,'eta');
console.log("_______________________");

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


function newestMovie(array){
let valoremax;
valoremax=(Math.max(...array.map(o => o.Year)));
array.forEach((el,index)=>{
if(el.Year==valoremax){
console.log(el);
}
})
}






/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(array){
let count=0;
array.forEach((el,index)=>{
count++;
})
console.log(`film presenti nell' arrey sono ${count}`);
}


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(array){
  let newArray=[];
  array.forEach((el,index)=>{
    newArray.push(Math.max(el.Year));

  })
  console.log(`anni presenti nella collection dei film: ${newArray}`);
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(array){
  let newArrey=[];
array.forEach((el,index)=>{

if(1000>=el.Year || el.Year<=2000){

newArrey.push(el);

}


})
console.log(`i film prodotti nel millennium sono:`);
console.log(newArrey);
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(array){
let sum=0;
array.forEach((el,index)=>{

sum=sum+Number(el.Year);

})

console.log("la somma di tutti gli anni è:");
console.log(sum);

}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(array,stringa){
  let newArray=[];
  let semaforo=0;
array.forEach((el,index)=>{
let l1=el.Title;
if(l1.toLowerCase()==stringa.toLowerCase()){
  newArray.push(el);
  semaforo=1;

}
})

if(semaforo==1){
  console.log("i titoli sono presenti e sono:");
  console.log(newArray);

}else{

  console.log("Mi dispiace ma non è presente")

}

}


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(array,stringa){
let match=[];
let unmatch=[]
let splitParola;


array.forEach((el,index)=>{
  let l1=el.Title;
  if(l1.toLowerCase()==stringa.toLowerCase()){
      match.push(el);

    }else{
      unmatch.push(el);
    }
    
  })
  

console.log("i film presenti nella ricerca sono: ");
console.log(match);
console.log("i film rimanenti non presenti nella ricerca sono: ")
console.log(unmatch);


}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
/*function removeIndex(movies,n){
  movies.map((el,index)=>{


if(index==n){

  movies.slice(el[index]);

}

})

console.log(movies);

}
*/
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectDiv(){
  let contenet=document.getElemetById("container");

}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTag(){
let td=document.getElementsByTagName('td');

}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampa(){

document.getElementsByTagName("td").innerHTML


}
stampa();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function cambiaColore(){
document.body.style.backgroundColor="blue";


}

cambiaColore();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


//Funzioni per i Movies
console.log("Restituisce il valore del' ulitmo film uscito");
newestMovie(movies);

console.log("_______________________");

countMovies(movies);

console.log("_______________________");

onlyTheYears(movies);

console.log("_______________________");

onlyInLastMillennium(movies);

console.log("_______________________");

sumAllTheYears(movies);
console.log("_______________________");


searchByTitle(movies,"lord of war");
console.log("_______________________");

searchAndDivide(movies,'lord of war');
console.log("_______________________");


//removeIndex(movies,4);
console.log("_______________________");