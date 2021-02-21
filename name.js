const Nform = document.querySelector(".js-nameform");
const Ninput = Nform.querySelector("input");
const greetings = document.querySelector(".js-greetings")

const USER_LS = "currentUser";

function paintingGreeting(text){

   
    greetings.classList.add("showing");


    greetings.innerText = `Hello ${text}`

}


function handlesubmit(event){
    event.preventDefault();
    const currentvalue = Ninput.value;
    console.log(currentvalue);
    localStorage.setItem(USER_LS , currentvalue);
    Nform.classList.add("form")
    paintingGreeting(currentvalue);

}



function askforname(){
    Nform.classList.remove("form");
    Nform.addEventListener("submit", handlesubmit)



}

function loadname(){

    const currentUser = localStorage.getItem(USER_LS);
 


    if (currentUser === null){
        askforname();
       

    } else {

        
        paintingGreeting(currentUser);
       

    }

}




function init(){
loadname();

}

init();