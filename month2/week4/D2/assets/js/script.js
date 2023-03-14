const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const saveButton = document.getElementById("save");
const deelteButton = document.getElementById("delete");
const textLabel = document.getElementById("textSave");
const counterLabel= document.getElementById("counter");
let count=0;


//localStorage

const add = function(){
    let StringaUser=`Name: ${nameInput.value} \n Surname: ${surnameInput.value} \n Age: ${ageInput.value}`;
    let user=localStorage.setItem("User",StringaUser);
    if(user){

        load();
    }
         nameInput.value="";
        surnameInput.value="";
        ageInput.value="";
}


const load= ()=>{
    
textLabel.innerText=localStorage.getItem("User");
  
}


const deleteUser= function(){
window.localStorage.removeItem("User");
load();
}

//SessionStorage


const counterView= ()=>{
    
window.setInterval(()=>{
    count=sessionStorage.getItem("counter");
    count++;
    sessionStorage.setItem("counter",count);
    counterLabel.innerText=sessionStorage.getItem("counter")+" s";
}
,1000);

}






saveButton.addEventListener("click",()=>{
    if(nameInput.value && surnameInput.value && ageInput.value){
    add();
    }
    load();
});


deelteButton.onclick= deleteUser;





window.addEventListener("load", ()=>{
load();
counterView();
});



