let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant
}


function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}
function setPlant() {
    if (gameOver) {
        return;
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}
 
function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}