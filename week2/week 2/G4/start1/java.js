const parola=document.getElementById("char");
var i=0;

/*const parole= function(){
    
    let array=["single","page","app"];
    let charRandom=Math.floor(Math.random()*array.length);
    parola.classList.add("animated")
    setTimeout(()=>{parola.innerText=array[charRandom];},2000);
     
     setTimeout(() => {  parola.classList.remove("animated"); }, 5000);
     
}
*/
function parole(i){
 
let array=["single page app","Interfacce web","App native"];
parola.classList.add("animated")
 //setTimeout(() => {  parola.classList.remove("animated"); },5000);
    setTimeout(()=>{parola.innerText=array[i];},2000);
  
if(i==array.length){
    i=0;
}
    
}

parola.addEventListener("click",()=>{
    window.setTimeout(()=>{parole(i)},1000);

});

