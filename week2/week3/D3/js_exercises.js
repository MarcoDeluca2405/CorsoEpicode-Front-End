/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself="Marco"
/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']
for(let i=0; i<pets.length;i++){
    console.log(pets[i]);
}


/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push("drago");
console.log(pets)
/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.pop();
console.log(pets);
/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let first=pets.shift();
pets.push(first);
console.log(pets);

/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for(let i=0;i<pets.length;i++){
    if(pets[i].charAt(0)==="c"){
        console.log(pets[i],true);
    }else{
        console.log(pets[i],false);
    }
}


/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for(let i=0;i<cars.length;i++){
    cars[i].licensePlate="activated";
}

console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
const newObjet=function(){
let newElement={
    brand: 'Citroën',
    model: 'C3',
    licensePlate:"activated",
    color: 'black',
    trims: ['life', 'style', 'r-line']
}
cars.push(newElement);

console.log(cars);
}

newObjet();

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/


let justFirstTrims = []
// inserisci la tua funzione qui
const getTrims=function (){

    for(let i=0;i<cars.length;i++){
        
    justFirstTrims.push(cars[i].trims[0]);
        

           
    }
  
    console.log(justFirstTrims);
}

getTrims();
/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
cars.forEach(el =>{

    if(el.color.length <= 4){
        console.log("Fizz");
    }else{
        console.log("Buzz");
    }

})

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

let newArrayCars=cars.filter(el => el.trims.length > 2);
console.log(newArrayCars);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

let newArrayString= [];
cars.map(el =>{

    newArrayString.push(`${el.brand} ${el.model}`);

});

console.log(newArrayString);

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i=0;
while(numericArray[i]!=32){
    console.log(numericArray[i]);
    i++;
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let newArrayAlpha= [];

charactersArray.forEach(el =>{
switch(el){

    case "a":
                newArrayAlpha.push(1);
        break;
    case "b":
        newArrayAlpha.push(2);
        break;
    case "c":
        newArrayAlpha.push(3);
        break;
    case "d":
        newArrayAlpha.push(4);
        break;
    case "e":
        newArrayAlpha.push(5);
        break;
    case "f":
        newArrayAlpha.push(6);
        break;
    case "g":
        newArrayAlpha.push(7);
        break;
    case "h":
        newArrayAlpha.push(8);
        break;
    case "i":
        newArrayAlpha.push(9);
        break;
    case "l":
        newArrayAlpha.push(10);
        break;
    case "m":
        newArrayAlpha.push(11);
        break;
    case "n":
        newArrayAlpha.push(12);
        break;
    case "o":
        newArrayAlpha.push(13);
        break;
    case "p":
        newArrayAlpha.push(14);
        break;
    case "q":
        newArrayAlpha.push(15);
        break;
    case "r":
        newArrayAlpha.push(16);
        break;
    case "s":
        newArrayAlpha.push(17);
        break;
    case "t":
        newArrayAlpha.push(18);
        break;
    case "u":
        newArrayAlpha.push(19);
        break;
    case "v":
        newArrayAlpha.push(20);
        break;
    case "z":
        newArrayAlpha.push(21);
        break;


}

});

console.log(newArrayAlpha);