/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

var l1= 10;
var l2= 2;
area(l1,l2);

function area(l1,l2){
let totale=l1*l2;
console.log(totale);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

var n1= 5;
var n2= 5;

crazySum(n1,n2);

function crazySum(n1,n2){
    let totale;
if(n1==n2){
    totale=n1+n2;
totale=totale*3;

}else{
    totale=n1+n2;
}

console.log(totale);

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

var crazyDiff= (n)=>{
const numero=19;
if(n > numero){
return Math.abs(n-numero)*3;

}
return Math.abs(n-numero);
}

console.log(crazyDiff(4));
console.log(crazyDiff(-30));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
var boundary = (n)=>{

    if(20< n && 20<=100 || n===400){

        return true
    }else{
        return false
    }
}
console.log(boundary(20));
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(500));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

var epify= (a) =>{
if(a.startsWith('EPICODE')){
    return a;

}
return `EPICODE + ${a}`;

}
console.log(epify('Javascript'));
console.log(epify('EPICODE PHP'));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
var check3and7 = (num)=> {
  if(num <0){  
    return false;
  }
if(num%3===0){
return true;

}if(num%7===0){
    return true;
}
return false;
}
console.log(check3and7(3));
console.log(check3and7(-3));
console.log(check3and7(4));
console.log(check3and7(14));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
var reverseString = (target) =>{
    var splitString = target.split("");
    var reverseArray= splitString.reverse();
    var parola=reverseArray.join("");
    return parola;

}
console.log(reverseString("ciao"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var upperFirst = (target)=>{
let parola=target.split(" ");
let uppercase = parola.map(element => element.charAt(0).toUpperCase()+parola.slice(1));
return uppercase;


}
console.log(upperFirst("ciao come stai"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

var cutString= (target)=>{
var parola=target.slice(1,target.length-1);
return parola;

}
console.log(cutString("Cugini"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
var giveMeRandom= (n) =>{
let arrayN= [];
for(let i=0; i<n; i++){
arrayN[i]= Math.floor(Math.random()*10)+1;

}
return arrayN;
}
console.log(giveMeRandom(2));
console.log(giveMeRandom(10));
/* SCRIVI QUI LA TUA RISPOSTA */
