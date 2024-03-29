let buttonPrimary=document.getElementById("primary");
let buttonSecondary=document.getElementById("secondary");
let row=document.getElementById("row");

let card=document.getElementById("card");

const createCard= function (item){
    
    row.innerHTML+=`
    
    <div class="col-md-4"  >
            <div class="card  mb-4 shadow-sm">
            <img src="${item.src.original}">
              <div class="card-body">
                <h5 class="card-title">${item.alt}</h5>
                <p class="card-text">
                  ${item.photographer}
                </p>
                <p class="card-text">
                <a href=${item.photographer_url} class="btn btn-sm btn-outline-primary"> Link fotografo </a>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button"  id="hide" class="hide btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${item.id}</small>
                </div>
              </div>
            </div>
          </div>`

          let button=document.querySelectorAll(".hide");
          button.forEach(button => {
            if (button.textContent.trim() === 'Hide') {
                button.addEventListener('click', () => {
                    const card = button.closest('.card');
                    const row = card.parentNode;
                    card.remove();
                    if (row.childElementCount === 0) {
                        row.remove();
                    }
                });
            }
        });
          
}





const start1=async ()=>{

    const url="https://api.pexels.com/v1/search?query=Ocean"; 
try {
    let response= await fetch(url,
        {
            method:'GET',
            headers:{
                'Authorization':'MInZNdFjii4nstFa7xNyZocODpvosXFuKPBEsNXVpPzCoDKOvHiHxWcU'
            }
        }

    );

 let item= await response.json();

        buttonPrimary.addEventListener("click",()=>{
          row.innerHTML="";
        item.photos.forEach(element => {
          createCard(element);
       
        /*  let button=document.querySelectorAll("#hide");
         button.forEach((btn)=>{
            btn.addEventListener("click", ()=>{
              let cards=document.getElementsByClassName("card");
              Array.from(cards).forEach((c)=>{
            c.classList.add("d-none");
            })
          
          })
        });
*/
      })

 
      });

    



 console.log(item.photos);


} catch (error) {
    console.log(error);
}

}


const start2=async ()=>{

  const url="https://api.pexels.com/v1/search?query=Pears"; 
try {
  let response= await fetch(url,
      {
          method:'GET',
          headers:{
              'Authorization':'MInZNdFjii4nstFa7xNyZocODpvosXFuKPBEsNXVpPzCoDKOvHiHxWcU'
          }
      }

  );

let item= await response.json();

      buttonSecondary.addEventListener("click",()=>{
        row.innerHTML="";
      item.photos.forEach(element => {
        createCard(element);
      
      });

    });


console.log(item.photos);


} catch (error) {
  console.log(error);
}

}





start1();
start2();