class Pets{
    constructor(petName,ownerName,species,breed){
        this.petName=petName;
        this.ownerName=ownerName;
        this.species=species;
        this.breed=breed;
    }

    Diff(AnownerName){
        if(this.ownerName!==AnownerName.ownerName){
            
            return console.log(false);
        }else{
            label.innerText="il proprietario dello stesso animale è: "+this.ownerName
            return console.log(true);
        }
    }
}


let petname=document.getElementById("petname");
let ownerName=document.getElementById("ownername");
let species=document.getElementById("species");
let breed=document.getElementById("breed");
let button2=document.getElementById("add2");
let list2=document.getElementById("list2");
let label=document.getElementById("proprietario");

let arrayPet= [];

const createPet=()=>{
let pet=new Pets(petname.value,ownerName.value,species.value,breed.value);
arrayPet.push(pet);

}




const createList2= ()=>{
list2.innerHTML="";

arrayPet.forEach((el)=>{
    let li=document.createElement("li");
    li.innerText=`il pet si chiama: ${el.petName} il proprietario è: ${el.ownerName} la specie è: ${el.species} la razza è:${el.breed}`;
    list2.appendChild(li);
})

}


const deleteList2 = ()=>{
    petname.value="";
    ownerName.value="";
    species.value="";
    breed.value="";
}


const diff2=()=>{

   for(let i=0;i<arrayPet.length;i++){
    for (let i2=0;i2<i;i2++){
        arrayPet[i2].Diff(arrayPet[i]);
    }


   }


}



button2.addEventListener("click", ()=>{
createPet();
createList2();
deleteList2();
diff2();

});
