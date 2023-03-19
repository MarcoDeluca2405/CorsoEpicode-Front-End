const myAPI="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzY3NWY4MWI0MjAwMTM5YjI4MGYiLCJpYXQiOjE2NzkwNDYyNjEsImV4cCI6MTY4MDI1NTg2MX0.Av3DJ8Bn7AXQbO9uyJB82p64d4llQIhl41wBQ8Xk7IY";
const url="https://striveschool-api.herokuapp.com/api/product/";
const nameP=document.getElementById("name");
const description=document.getElementById("description");
const dataList=document.getElementById("dataList");
const textUrl=document.getElementById("textUrl");
const price=document.getElementById("price");
const form=document.getElementById("form");
const button=document.getElementById("button");
const button2=document.getElementById("button2");
const fhater=document.getElementById("fhater_button");
const id_url=new URLSearchParams(window.location.search).get("id");
const divModal=document.getElementById("mod");
const divImg=document.getElementById("image");
const spiner=document.getElementById("spinner");
const buttonDark = document.getElementById("dark");
const container =document.getElementById("container");
let s_n = localStorage.getItem("night");

let itemDel = async ()=>{
    try {
        
    
    let resposive= await fetch(url+id_url,{

        method: "DELETE",

        headers: {
            "Authorization": myAPI,
            
        }
    });

    let Item=await resposive.json();
    console.log(Item);

} catch (error) {
        
}
    
}


const create=async (item)=>{
    try {
        
        let plus_id =id_url ? url+id_url : url; 
        let bool=id_url ?  true : false
        let resposive=await fetch(plus_id,{

            method: id_url ? "PUT" : "POST",
            
            body:JSON.stringify(item),

            headers: {
                "Authorization": myAPI,
                "Content-Type":"application/json"
            }
        })
        
        let itemObj= await resposive.json();
        
        if(s_n==1){
          let card = document.querySelectorAll(".card");
          buttonDark.classList.toggle("bi-moon");
          buttonDark.classList.toggle("bg-secodnary");
          buttonDark.classList.toggle("btn-outline-dark");
          buttonDark.classList.toggle("btn-outline-secondary");
          body.classList.toggle("bg-dark");
          body.classList.toggle("bg-gradient");
          body.classList.toggle("text-white");
          nav.classList.toggle("bg-dark");
          nav.classList.toggle("text-light");
          container.classList.toggle("text-white")
          container.classList.toggle("bg-dark")
        
          card.forEach(el => {
              el.classList.toggle("bg-dark");
              el.classList.toggle("bg-gradient");
              el.classList.toggle("border");
              el.classList.toggle("border-3");
              el.classList.toggle("border-secondary");
        
          })
        
        
        }

        if(bool==true){
          pressNight();
            spiner.classList.add("d-none");
            button.classList.add("d-none");
            button2.classList.add("d-none");
           
            fhater.innerHTML=`
            <button type="submit" id="mod" onclick="modificaItem()" class="btn btn-secondary mx-4">Modifica</button>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Elimina
          </button>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Vuoi Veramente cancellare questo articolo?</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  Questo Articolo sarà eliminato definitivamente.
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Return</button>
                  <button type="button" onclick="EliminaItem()" class="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>`;

            visualItem(itemObj);

            divImg.innerHTML=` <div class="container w-50 border border-3 border-secondary rounded m-0 my-3">
            <img src="${itemObj.imageUrl}" class="figure-img w-50" id="img">
            </div>`;


           console.log("ciao");

        }else{
          pressNight();
            spiner.classList.add("d-none");
            divModal.innerHTML+=` <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Vuoi Veramente cancellare questo Form?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Questo Form sarà svuotato sei sicuro?
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Return</button>
                    <button type="button" onclick="formEmpty()" data-bs-dismiss="modal" class="btn btn-danger">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
            console.log("non ciao");
        console.log(resposive);
        premuto();
        }

    } catch (error) {
        alert("Qualcosa è andato storto");
    }

}



const pressNight=()=>{

  buttonDark.addEventListener("click", () => {
         s_n=localStorage.getItem("night");
         s_n++;
         
      
      let card = document.querySelectorAll(".card");
      buttonDark.classList.toggle("bi-moon");
      buttonDark.classList.toggle("bg-secodnary");
      buttonDark.classList.toggle("btn-outline-dark");
      buttonDark.classList.toggle("btn-outline-secondary");
      body.classList.toggle("bg-dark");
      body.classList.toggle("bg-gradient");
      body.classList.toggle("text-white");
      nav.classList.toggle("bg-dark");
      nav.classList.toggle("text-light");
      container.classList.toggle("text-white")
      container.classList.toggle("bg-dark")
  
      card.forEach(el => {
          el.classList.toggle("bg-dark");
          el.classList.toggle("bg-gradient");
          el.classList.toggle("border");
          el.classList.toggle("border-3");
          el.classList.toggle("border-secondary");
  
      })
  
  
      if(s_n!=1){
          s_n=0;
          localStorage.setItem("night",s_n);
      }
  
      localStorage.setItem("night",s_n);
  
  })
  
  }

const premuto= ()=>{
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        
        let stringa={name:nameP.value,description:description.value,brand:dataList.value,imageUrl:textUrl.value,price:price.value};
        console.log(JSON.stringify(stringa));
        create(stringa);
    
        alert("Oggetto inserito correttamente");
        nameP.value="";
        description.value="";
        dataList.value="";
        textUrl.value="";
        price.value="";
    
    
    })
    }


    const modificaItem = ()=>{
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            let stringa={name:nameP.value,description:description.value,brand:dataList.value,imageUrl:textUrl.value,price:price.value};
            console.log(JSON.stringify(stringa));
            create(stringa);
            alert("Oggetto inserito correttamente");
        })
    }

    const visualItem= (item)=>{
        nameP.value=item.name;
        description.value=item.description;
        dataList.value=item.brand;
        textUrl.value=item.imageUrl;
        price.value=item.price;


    }


    const EliminaItem= ()=>{
        itemDel();
        alert("oggetto è stato ellimanto correttamente");
        window.location.replace("./index.html");
    }

    const formEmpty= function() {
   
        nameP.value="";
        description.value="";
        dataList.value="";
        textUrl.value="";
        price.value="";

    }



window.onload=create(); 
  
