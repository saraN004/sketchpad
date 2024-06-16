
const gridSize = 600;
let squarePerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.height = sketchArea.style.width = `${gridSize}px`;

function setBackgroundColor() {
    this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

function creatGridCell(squarePerSide) {
    const numOfSquares = (squarePerSide * squarePerSide);

    for (i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement('div');
        gridCell.style.height = gridCell.style.width = (`${(gridSize / squarePerSide) - 2}px`);
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);


    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

function creatNewBoard() {
    let cellNumber = prompt("please enter the number of squares per side for the new grid", "16");
    let text;

    if (cellNumber == null || cellNumber == "") {
        console.log("user have cancelled the prompt");
    } else if (cellNumber > 100) {
        window.alert("you have exceeded the maximum number of cells, please enter a value lower than 100");
    } else {
        removeGridCells()
        creatGridCell(cellNumber);
        text = `current board with ${cellNumber} squares`;
    }
    document.getElementById("demo").textContent = text;

}
creatGridCell(16);
