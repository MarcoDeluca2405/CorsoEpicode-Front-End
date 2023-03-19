const myAPI="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzY3NWY4MWI0MjAwMTM5YjI4MGYiLCJpYXQiOjE2NzkwNDYyNjEsImV4cCI6MTY4MDI1NTg2MX0.Av3DJ8Bn7AXQbO9uyJB82p64d4llQIhl41wBQ8Xk7IY";
const url="https://striveschool-api.herokuapp.com/api/product/";
let image=document.getElementById("img");
let NameP=document.getElementById("name");
let description=document.getElementById("description");
let brand=document.getElementById("brand");
let url_P=document.getElementById("textUrl");
let price=document.getElementById("price");
let ID=document.getElementById("_ID");
const id_url=new URLSearchParams(window.location.search).get("id");
const spiner=document.getElementById("spinner");
console.log(id_url);
s_n=localStorage.getItem("night");
let body=document.getElementById("body");
let nav=document.getElementById("nav");
let buttonDark=document.getElementById("dark");



const infoItem=(items)=>{
image.setAttribute("src",items.imageUrl);
NameP.innerText=items.name;
description.innerText=items.description;
brand.innerText=items.brand;
url_P.value=items.imageUrl;
price.value=items.price;
ID.innerText=items._id;
}


if(s_n==1){
    buttonDark.classList.toggle("bi-moon");
    buttonDark.classList.toggle("bg-secodnary");
    buttonDark.classList.toggle("btn-outline-dark");
    buttonDark.classList.toggle("btn-outline-secondary");
    body.classList.toggle("bg-dark");
    body.classList.toggle("bg-gradient");
    body.classList.toggle("text-white");
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("text-light");  
}


const getItem=async ()=>{
    try {
        
    
    let resposive=await fetch(url+id_url,{
        method: "GET",
        headers: {
            "Authorization": myAPI,
            "Content-Type":"application/json"
        }

    });
pressNight();
    const items= await resposive.json();
        infoItem(items);
        
        spiner.classList.add("d-none");
} catch (error) {
        console.log(error);
}
    
}


const pressNight=()=>{

    buttonDark.addEventListener("click", () => {
           s_n=localStorage.getItem("night");
           s_n++;
           
        
        buttonDark.classList.toggle("bi-moon");
        buttonDark.classList.toggle("bg-secodnary");
        buttonDark.classList.toggle("btn-outline-dark");
        buttonDark.classList.toggle("btn-outline-secondary");
        body.classList.toggle("bg-dark");
        body.classList.toggle("bg-gradient");
        body.classList.toggle("text-white");
        nav.classList.toggle("bg-dark");
        nav.classList.toggle("text-light");
    
       
    
    
        if(s_n!=1){
            s_n=0;
            localStorage.setItem("night",s_n);
        }
    
        localStorage.setItem("night",s_n);
    
    })
    
    }

getItem();