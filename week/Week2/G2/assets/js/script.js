
const b= 3.14;
var a = "Aldo";
let c = "cliente";


document.getElementById('concatena').innerHTML=a+', '+c+', '+b;

var con = a+', '+c+', '+b;

document.getElementById('concatena2').innerHTML=con;


var a1="Mario";
let b1="Carla";
document.getElementById('var').innerHTML=a1;
document.getElementById('let').innerHTML=b1;
document.getElementById('final').innerHTML=a1;




document.getElementById('let2').innerHTML=a1;
a1=b1;
document.getElementById('let3').innerHTML=b1;
document.getElementById('final2').innerHTML=a1;

//prova esempio typeof
//var iniziale= 15;

const iniziale=15;

var val1;
var totale;

document.getElementById('iniziale').innerHTML=document.getElementById('iniziale').textContent+iniziale;

val=15;
totale=iniziale+val;
document.getElementById('valore1').innerHTML=document.getElementById('valore1').textContent+totale+', '+(++totale);

val=10;
totale=iniziale-val;
document.getElementById('valore2').innerHTML=document.getElementById('valore2').textContent+totale+', '+(--totale);

val=3;
totale=iniziale*val;
document.getElementById('valore3').innerHTML=document.getElementById('valore3').textContent+totale;

totale=iniziale/val;
document.getElementById('valore4').innerHTML=document.getElementById('valore4').textContent+totale;

val=typeof iniziale;
console.log(val);

//prova
//iniziale="ciao";


console.log(iniziale);
if(typeof iniziale == val){

    document.getElementById("valore5").innerHTML=document.getElementById("valore5").textContent+iniziale+' è un numero'

}else{
    document.getElementById("valore5").innerHTML=document.getElementById("valore5").textContent+iniziale+' non è un numero'

}



