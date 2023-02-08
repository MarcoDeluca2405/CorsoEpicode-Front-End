/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/




document.getElementById('button1').addEventListener('click', function(){
document.getElementById("valore").innerHTML="Il piu' grande è: ";
let a= document.getElementById('a').value;
let b= document.getElementById('b').value;

IlPiugrande(a,b);


});


function IlPiugrande(_a,_b){
this.a=_a;
this.b=_b;
a=Number(a);
b=Number(b);

 

if(a>b){
document.getElementById("valore").innerHTML += a;
console.log(a);

}else{
  document.getElementById("valore").innerHTML += b;
}
console.log(b);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
document.getElementById('button2').addEventListener('click',function(){
  document.getElementById('valore2').innerHTML="Il valore è: "
let a=document.getElementById('equ').value;

uguale(a);

});

function uguale(_a){
  this.a=_a;

  if(a == 5){
    document.getElementById("valore2").innerHTML += "equal";
    console.log("equal");
  }else{
    document.getElementById("valore2").innerHTML += "not equal";
    console.log("not equal");
  }
}



/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

document.getElementById('button3').addEventListener('click',function(){
document.getElementById("valore3").innerHTML= "Il valore è: ";
let a=document.getElementById("divisibile").value;

divisibile(a);


})


function divisibile(_a){
this.a=_a;

let totale;

totale=a%5;

if(totale===0){
document.getElementById("valore3").innerHTML += "si"
console.log("si");
}
else{
  document.getElementById("valore3").innerHTML += "no"
  console.log("no");
}

}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

document.getElementById("button4").addEventListener('click', function(){
  document.getElementById("valore4").innerHTML= "Il valore è: ";
let a=document.getElementById("a2").value;
let b=document.getElementById("b2").value;

valori(a,b);

})

function valori(_a,_b){
this.a=_a;
this.b=_b;

let totaleAdd=0;
let totaleSott=0;


totaleAdd= Number(a)+Number(b);
totaleSott=Number(a)+Number(b);
console.log(totaleAdd);
if(totaleAdd==8 || totaleSott==8 && Number(a)==8 && Number(b)==8){
    document.getElementById("valore4").innerHTML += "si";
    console.log("si");

}else{
document.getElementById("valore4").innerHTML += "no";
  console.log("no");
}

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

document.getElementById("button5").addEventListener('click', function(){
document.getElementById('costototale').innerHTML= "Il costo è: ";
document.getElementById('valore5').innerHTML= "Il valore è: ";

let a= document.getElementById('a3').value;
let b= document.getElementById('b3').value;

costo(a,b);


})

function costo(_a,_b){
this.a=_a;
this.b=_b;

let totalShoppingCart=Number(a)+Number(b);
document.getElementById("costototale").innerHTML += totalShoppingCart;
if(totalShoppingCart>=50){
document.getElementById("valore5").innerHTML+= "Free -" + totalShoppingCart;

}else{
totalShoppingCart=totalShoppingCart+10;
document.getElementById("valore5").innerHTML+= "Costo + 10.00 -" + totalShoppingCart ;

}


}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

document.getElementById("button6").addEventListener('click', function(){
  document.getElementById('costototale2').innerHTML= "Il costo è: ";
  document.getElementById('valore6').innerHTML= "Il valore è: ";
  
  let a= document.getElementById('a4').value;
  let b= document.getElementById('b4').value;
  
  BlackFryday(a,b);

  })



function BlackFryday(_a,_b){
  this.a=_a;
  this.b=_b;
  let a1;
  let b1;
  a=Number(a);
  b=Number(b);
  let totalShoppingCart=Number(a)+Number(b);
  a1=(a*20)/100;
  a=a-a1;

  b1=(b*20)/100;
  b=b-b1;

  let totalshop=a+b;
  document.getElementById("costototale2").innerHTML += totalShoppingCart;

  if(totalShoppingCart>=50){
  document.getElementById("valore6").innerHTML+= "Free = " + totalShoppingCart;
  document.getElementById("valore7").innerHTML+= " " + totalshop;
  }else{
  totalShoppingCart=totalShoppingCart+10;
  document.getElementById("valore6").innerHTML+= "Costo + 10.00 =" + totalShoppingCart ;
  document.getElementById("valore7").innerHTML+= " " + totalshop ;
  }
  

}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

document.getElementById('ordina').addEventListener('click',function(){
  let a= document.getElementById('primo').value;
  let b= document.getElementById('secondo').value;
  let c= document.getElementById('terzo').value;
  ordine(a,b,c);
})

function ordine(_a,_b,_c){

this.a=_a;
this.b=_b;
this.c=_c;

if(a>b){

  if(a>c){

    document.getElementById('Eordinato').innerHTML=a+','+c+','+b;

  }else{

    document.getElementById('Eordinato').innerHTML=c+','+a+','+b;

  }

}else{

    if(b>c){
      document.getElementById('Eordinato').innerHTML=b+','+c+','+a;
    }else{

      document.getElementById('Eordinato').innerHTML=c+','+b+','+a;

    }

}

}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

document.getElementById('verifica').addEventListener('click',function(){
let a=document.getElementById('testo');
console.log(typeof(a));verifica(a);


})

function verifica(_a){
this.a=_a;
console.log(typeof(a));
if(typeof(a)==="number"){
document.getElementById('tipo').innerHTML="è un numero";

}else{
  document.getElementById('tipo').innerHTML="non è un numero";
}


}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
