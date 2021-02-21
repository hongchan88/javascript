
const container = document.querySelector(".js-clock");
const clocktitle = container.querySelector("h1");


function getTime() {
    const date = new Date();

    const hour = date.getHours();
    const min = date.getMinutes();
    const seconds = date.getSeconds();

    

    clocktitle.innerText = ` ${hour < 10 ? `0${hour}` : hour}:${min}:${ seconds < 10 ? `0${seconds}` : seconds}  `;
}





function init() {
    getTime();
    setInterval(getTime , 1000);
}

init();