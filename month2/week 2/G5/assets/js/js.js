const header=document.getElementById("navheader");
const button=document.getElementById("buttonAnimated");
window.onscroll = function() {myFunction()};


function myFunction() {
  if (document.documentElement.scrollTop > 700) {
    header.classList.remove("navChangeRemove");
    header.classList.add("navChange");
    button.classList.remove("AnimatedRemoved");
    button.classList.add("Animated");


    setTimeout(2000);
    button.setAttribute("style","background-color:#1a8917");
   header.setAttribute("style","background-color: rgb(210, 204, 204)");

}
if(document.documentElement.scrollTop < 700){
    header.classList.remove("navChange");
    button.classList.remove("Animated");
    header.classList.add("navChangeRemove");
    
    button.classList.add("AnimatedRemoved");

    setTimeout(2000);
    button.setAttribute("style","background-color:black");
   header.setAttribute("style","background-color: #ffc017");

}


}




