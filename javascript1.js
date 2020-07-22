'use strict'
document.getElementById("btn").addEventListener("click", cambiarColor);
let pixelColor = document.querySelectorAll(".pixel");
 
function cambiarColor(){
    let arrayColores = ['#851de0','#aa26da','#f1fa3c','#05dfd7','#723881','#c355f5','#08ffc8', '#f4ff61'];
    let numeroRandom = Math.floor(8 * Math.random());
    for (let i = 0; i < pixelColor.length; i++){
    pixelColor[i].style.background = arrayColores[numeroRandom]; 
    }

}



// function cambiarColor(){
// pixelColor.forEach(element => element.style.backgroundColor = "yellow");
// }