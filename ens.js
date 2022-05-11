
let container = document.querySelector(".container");
let button = document.getElementById("button");

function makeBox(numberDivs) {
    let boxDimensions = ((600 / numberDivs)-2).toFixed(2);
    let boxSize = Math.pow(numberDivs, 2);
    while (boxSize>0){
        let newBox = document.createElement('div');
        container.appendChild(newBox);
        newBox.className=('box');
        newBox.style.height= boxDimensions + "px";
        newBox.style.width= boxDimensions + "px";
        newBox.style.border = "1px solid black";
        boxSize--;
    }
    let box = document.querySelectorAll(".box")
    box.forEach(cell => cell.addEventListener('mouseenter',changeColor)); 
    console.log(boxDimensions);
    
}
function changeColor() {
    this.style.backgroundColor = 'black';
}

function clear() {
    let boxSize = prompt("How many squares per side?");

    if (boxSize>= 1 && boxSize <=100){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        makeBox(boxSize);
    }
    else {
        alert ('Choose a number between 1-100');
        clear;
    }
}

button.addEventListener('click',clear);
window.onload = makeBox(16);

