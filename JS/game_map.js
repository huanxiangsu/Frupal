var hero_row_coordinate = 0;
var hero_col_coordinate = 0;
var mapSize = 15;  // the whole map size, X * X (can be any value)
var cellSize = 35;  // each square's size measured in px. (can be any value)

var map = document.getElementById("map");
var startMenu = document.getElementById("startPage");
var game = document.getElementById("game");
var hero = document.getElementById("hero");


// start, function to display the game when clicked "new game"
function startGame(){
    setupMap();  // setup the game map, have all game element ready in the map
    setupHeroSize();  // set the hero size to fit into a square.
    displayBlock(0, 0);  // starting coordinate
    displayBlock(0, 2);  // example
    displayBlock(4, 4);  // example
    startMenu.style.display = "none"; // hide the menu page
    game.style.display = "block";  // display the game with the map and control-panel
}

// exit, remove all map cells and display starting menu when clicked "exit game"
function exitGame(){
    game.style.display = "none";
    startMenu.style.display = "block";
    removeAllCells();
}


// to setup a basic map, all cells will set to default meadow terrain.
function setupMap(){
    setUpMapSize();  // setup the size of the map frame
    
    var l_pos = 0;
    var u_pos = 0;
    var row = 0;
    var id = "";  // each square will have a unique id as a matrix, like 0-0, 0-1
    for(i = 0; i < mapSize; i++){
        u_pos = i * cellSize;
        row = mapSize - (i+1);  // row from (mapSize-1) to 0
        for(j = 0; j < mapSize; j++){
            l_pos = j * cellSize;
            id = row + "-" + j;       
            addMeadowCell(l_pos, u_pos, id);  // default will set all cells to meadow
        }
    }
}


// setup the overall map size
function setUpMapSize(){
    map.style.height = mapSize * cellSize + 40 + 'px';
    map.style.width = mapSize * cellSize + 40 + 'px';
}

// set up the size of hero.
function setupHeroSize(){
    hero.style.height = cellSize + 'px';
    hero.style.width = cellSize + 'px';
    hero.style.backgroundSize = cellSize + 'px';
    hero.style.top = mapSize * cellSize - cellSize + 'px';
    hero_top_pos = mapSize * cellSize - cellSize;
}


// Function to create a cell (a div element) with meadow terrain
// id: an id is a matrix coordinate, like "0-0", "1-5".
function addMeadowCell(leftPosition, upPosition, ID){
    var x = document.createElement("DIV");
    x.setAttribute("class", "default-cell meadow un-viewable");
    x.setAttribute("ID", ID);
    x.setAttribute("style", "left:"+leftPosition+"px; top:"+upPosition+"px; height:" + cellSize + "px; width:" + cellSize + "px; background-size:" + cellSize + "px");
    //x.classList.remove("un-viewable");
    map.appendChild(x);
}


// remove all div elements within the map when exit.
function removeAllCells(){
    var cells = document.getElementsByClassName("default-cell");
    while(cells.length > 0){
        cells[0].parentNode.removeChild(cells[0]);
    }
}


// function to display a block to viewable when the hero move to a specific coordinate.
// argument should be in matrix coordinate, ex. (1,2) : row = 1, column = 2
function displayBlock(row, column){
    var coordinate = row + "-" + column;
    var a_cell = document.getElementById(coordinate).classList.remove("un-viewable");
}



