const myAPI="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzY3NWY4MWI0MjAwMTM5YjI4MGYiLCJpYXQiOjE2NzkwNDYyNjEsImV4cCI6MTY4MDI1NTg2MX0.Av3DJ8Bn7AXQbO9uyJB82p64d4llQIhl41wBQ8Xk7IY";
const url="https://striveschool-api.herokuapp.com/api/product/";
const spiner=document.getElementById("spinner");
const row=document.getElementById("row");


const createCard = (item)=>{

row.innerHTML+=`


<div class="col">
<div class="card h-100">
<div class="container w-50">

  <img src="${item.imageUrl}" class="card-img-top w-100 " alt="...">
  
  </div>
  <div class="card-body d-flex flex-column justify-content-evenly  align-items-center  ">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    
    </div>

    <div class="card-footer d-flex justify-content-between align-items-center ">
    
    <div class="btn-group border mx-2" role="group" aria-label="Basic example">
    <a href="./dettail.html?id=${item._id}" class="btn btn-primary btn-sm  ">Scopri di piu</a>
    <a href="./backOffice.html?id=${item._id}" class="btn btn-secondary btn-sm ">Modifica</a>
    </div>
    <div>
    <p class="card-text ">Prezzo: ${item.price}€
    </div>
</div>
</div>


`



}


const Getcard=async ()=>{
try {
    
    const resposive=await fetch(url,{
        method: "GET",
        headers:{
            "Authorization":myAPI
        }
    });

     const Oggetti=await resposive.json();
    console.log(Oggetti);

    Oggetti.forEach(el => {
        createCard(el);
    });

    spiner.classList.add("d-none");

} catch (error) {
    console.log(error);
}


}

Getcard();