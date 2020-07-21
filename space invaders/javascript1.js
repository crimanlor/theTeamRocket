'use strict'
document.getElementById("btn").addEventListener("click", cambiarColor);
let pixelColor = document.querySelectorAll(".pixel");
 
function cambiarColor(){
pixelColor.forEach(element => element.style.backgroundColor = "yellow");
}






