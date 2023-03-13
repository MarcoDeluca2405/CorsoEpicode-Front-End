class User{
constructor(firstName,lastName,age,location){
this.firstName=firstName;
this.lastName=lastName;
this.age=age;
this.location=location;
}
diff(SecondPerson){
    if(this.age>SecondPerson.age){
        return `${this.firstName} ${this.lastName} è piu vecchio`;
    }else if(this.age===SecondPerson.age){
        return `${this.firstName} ${this.lastName} e ${SecondPerson.firstName} ${SecondPerson.lastName} hanno la stessa età`;
    }else{
        return `${SecondPerson.firstName} ${SecondPerson.lastName} è il piu vecchio`;
    }
}

}




let namefirst=document.getElementsByClassName("name");
let lastname=document.getElementsByClassName("lastname");
let age=document.getElementsByClassName("age")
let locationUser=document.getElementsByClassName("location");
let list=document.getElementById("list");
let button=document.getElementById("add");
let buttonDif=document.getElementById("conf");
let show=document.getElementById("show");
let arrayUser=[];


const createList= ()=>{
list.innerHTML="";
arrayUser.forEach((el)=>{
    const li=document.createElement("li");
     li.innerText=`${el.firstName} ${el.lastName} ${el.age} ${el.location}`;
    list.appendChild(li);
});
}


const addUser = ()=>{
let user=new User(namefirst[0].value,lastname[0].value,age[0].value,locationUser[0].value);
arrayUser.push(user);
}

const deleteInput= ()=>{
    namefirst.value="";
    lastname.value="";
    age.value="";
    locationUser.value="";
}


button.addEventListener("click", ()=>{
addUser();
createList();
deleteInput();

});


const makePerson=()=>{
let pers1= new User(namefirst[1].value,lastname[1].value,age[1].value);
let pers2= new User(namefirst[2].value,lastname[2].value,age[2].value);

show.innerText= `il piu grande è: ${pers1.diff(pers2)}`;


}


buttonDif.addEventListener("click", ()=>{
makePerson();

});