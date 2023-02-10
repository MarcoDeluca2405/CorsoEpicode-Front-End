
//Funzione che permette di Acquisire i valori Premuti
function num(_dato){
if(document.getElementById("testo").value==0){
    document.getElementById("testo").value="";
}

let a=document.getElementById("testo").value;

    document.getElementById("testo").value += _dato;


}

//Funzione che permette di Elaborare dati sotto forma di Stringa e Convertilli in Numerico

function operazione(){
    document.getElementById("testo").value=eval(document.getElementById("testo").value);
}

//Funzione che Cancella e stampa valore '0' iniziale
function del(){
    document.getElementById("testo").value ="0";
}