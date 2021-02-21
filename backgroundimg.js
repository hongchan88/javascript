const body = document.querySelector("body");




function paintImage(randNumber){
    const image = new Image();
    console.log(randNumber);
    image.src = `img/${randNumber}.jpeg`
    console.log(image.src);
    image.classList.add("bgimage")
    body.appendChild(image);
 

}

function randomeNumber() {

    const randNumner = Math.ceil(Math.random() * 4);

return randNumner;
}



function init(){

const randNu = randomeNumber();
paintImage(randNu)

}

init();