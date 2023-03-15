fetch("https://striveschool-api.herokuapp.com/books").then((response)=>{
    

console.log(response);
return response.json();
}).then((data)=>{
    let list=document.getElementById("lista");
    let row2=document.getElementById("lib");
    let totaleLocal=document.getElementById("tot");
    
    let totale=0;
    let storage=[];
    console.log(data);
    
    const selectitem = function(){
        list.innerHTML="";
         storage=JSON.parse(localStorage.getItem("storage"));
        console.log(storage);
        storage.forEach((el,index)=>{
        
        let newList2=document.createElement("li");
        newList2.classList.add("list-group-item","w-100","my-3");
        
        let cards2=document.createElement("div");
        cards2.classList.add("cards","d-inline-flex");
        
        let newImg2=document.createElement("img");
        newImg2.src=el.img;
        newImg2.classList.add("card-img-top","w-50");
        
        
        
        let newBody3=document.createElement("div");
        newBody3.classList.add("card-body");
        
        let newTitle2=document.createElement("h5");
        newTitle2.classList.add("card-title","text-dark");
        newTitle2.innerText=el.title;
        
        let newCategory2=document.createElement("p");
        newCategory2.classList.add("card-text","text-dark");
        newCategory2.innerText="Category: "+el.category;
        
        
        let newBody4=document.createElement("div");
        newBody4.classList.add("card-footer","bg-dark","bg-gradient");
        
        
        let newPrice2=document.createElement("p");
        newPrice2.classList.add("card-text","text-light");
        newPrice2.classList.add("text-center");
        newPrice2.innerText=el.price+"€";  

        let buttonRemoved=document.createElement("button");
        buttonRemoved.classList.add("btn","btn-danger");

        let newIcon3=document.createElement("i");
        newIcon3.classList.add("bi","bi-x-circle");

        buttonRemoved.appendChild(newIcon3);
        
        
        
        list.appendChild(newList2);
        
        newList2.appendChild(cards2);
        
        cards2.append(newImg2);
        cards2.append(newBody3);
        cards2.append(newBody4);
        
        newBody3.appendChild(newTitle2);
        newBody3.appendChild(newCategory2);
        
        newBody4.appendChild(newPrice2);
        newBody4.appendChild(buttonRemoved);


        
        buttonRemoved.addEventListener("click",()=>{
            storage.splice(index,1);
            localStorage.setItem("storage",JSON.stringify(storage));
            
            let totalstorage=Number(localStorage.getItem("totale"));
            totale=totalstorage-el.price;
          
            localStorage.setItem("totale",totale);

            selectitem();
            if(index==0){
                totaleLocal.innerText="il totale del carrello è: 0€";
            }
          })
          
            
       

        let tot=localStorage.getItem("totale");
        totaleLocal.innerText=`il totale del carrello è: ${tot} €`;

        
        });
        }






data.forEach((el) => {
    
    let newCol=document.createElement("div");
    newCol.classList.add("col");

    let newCards=document.createElement("div");
    newCards.classList.add("card","h-100")
    newCards.classList.add("bg-dark","bg-gradient","border","border-4","border-secondary");
    
    
    let newImg=document.createElement("img");
    newImg.src=el.img;
    newImg.classList.add("card-img-top");


    let newBody=document.createElement("div");
    newBody.classList.add("card-body");

    let newTitle=document.createElement("h5");
    newTitle.classList.add("card-title","text-light");
    newTitle.innerText=el.title;
    
    let newCategory=document.createElement("p");
    newCategory.classList.add("card-text","text-light");
    newCategory.innerText="Category: "+el.category;


    let newBody2=document.createElement("div");
    newBody2.classList.add("card-footer");


    let newPrice=document.createElement("p");
    newPrice.classList.add("card-text","text-light");
    newPrice.classList.add("float-end");
    newPrice.innerText=el.price+"€";  
    
    
    let newButtonStorage=document.createElement("button");
    newButtonStorage.classList.add("btn","btn-primary","btn-sm","mx-2");

    let newIcon=document.createElement("i");
    newIcon.classList.add("bi","bi-bag-plus");


    let newButtonDelette=document.createElement("button");
    newButtonDelette.classList.add("btn","btn-danger","btn-sm");

    let newIcon2=document.createElement("i");
    newIcon2.classList.add("bi","bi-trash3");


    

    newButtonStorage.appendChild(newIcon);
    newButtonDelette.appendChild(newIcon2);


    row2.appendChild(newCol);

    newCol.appendChild(newCards);

    newCards.appendChild(newImg);
    newCards.appendChild(newBody);
    newCards.appendChild(newBody2);

    newBody.appendChild(newTitle);
    newBody.appendChild(newCategory);
    

    newBody2.appendChild(newPrice);
    newBody2.appendChild(newButtonStorage);
    newBody2.appendChild(newButtonDelette);
    
    
    
    newButtonDelette.addEventListener("click", ()=>{
        newCards.remove();
    });

    newButtonStorage.addEventListener("click",()=>{
        if(storage){
            let totalstorage=Number(localStorage.getItem("totale"));
        totale=totalstorage+el.price;
        console.log(totale);
        let fileStorage={asin:el.asin,title:el.title,category:el.category,img:el.img,price:el.price};
        storage.push(fileStorage);
         storageLocal=localStorage.setItem("storage",JSON.stringify(storage));
        localStorage.setItem("totale",totale);
        selectitem()}else{
            storage=[];
        }
    });


});

selectitem();



}).catch((error)=>{
    console.log(error);
});


window.addEventListener("load",()=>{



});

