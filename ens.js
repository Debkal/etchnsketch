
let container = document.querySelector(".container");


function makeBox() {
    for( let i= 0; i< 16; i++){
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for(let j=0; j<16; j++){
            let column = document.createElement("div");
            column.className = "column";
            container.appendChild(column);
        }

    }
}
makeBox();