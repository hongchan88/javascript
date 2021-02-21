
const COORDS = "coords"
const API_KEY = "9781cf557ef09d2de48ac872bc251ff5"
const weahter = document.querySelector(".js-weather");

function getWeather(latitude, longitude){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
.then(function (response){
return response.json()}).then(function(json){
const temp = json.main.temp;
const place = json.name;
weahter.innerText = `You are in ${place} and ${temp} degree  `
});

}

function saveCords(cordsobj){
localStorage.setItem(COORDS , JSON.stringify(cordsobj));

}

function handleGeoSucces(position){

    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const cordsobj = {
        latitude,
        longitude
    };
saveCords(cordsobj);
function getWeather(latitude , longitude){



}
}

function handleGeoError(){

    console.log("fail");

}


function askCords(){

    navigator.geolocation.getCurrentPosition(handleGeoSucces , handleGeoError);
    console.log("suvvv")
}


function loadCoords(){
const loadedCords = localStorage.getItem(COORDS);
if (loadedCords === null){
    askCords();

} else {
    const parsed = JSON.parse(loadedCords);
    getWeather(parsed.latitude , parsed.longitude);
}
}

function init(){
loadCoords();

}

init();