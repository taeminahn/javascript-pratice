const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secaonds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${secaonds}`
}

getClock();
setInterval(getClock, 1000);