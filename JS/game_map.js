var mapSize = 10;  // the whole map size, X * X (from map_file)
var cellSize = 40;  // each square's size measured in px. (can be any value)
var hero_left_pos = 0; // used to move hero within the graphic map
var hero_top_pos = 0;  // same above

var graphic_map = document.getElementById("map");
var startPage = document.getElementById("startPage");
var gamePage = document.getElementById("game");
var graphic_hero = document.getElementById("hero");

document.getElementById("moveUp").addEventListener("click", move_hero_up_graph);
document.getElementById("moveDown").addEventListener("click", move_hero_down_graph);
document.getElementById("moveLeft").addEventListener("click", move_hero_left_graph);
document.getElementById("moveRight").addEventListener("click", move_hero_right_graph);


// to setup a basic map, all cells will set to default meadow terrain.
function setupMap(){
    setUpMapSize();  // setup the size of the map frame
    setupHero();  // set the hero size to fit into a square and put it in (0,0).

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
            createMeadowCell(l_pos, u_pos, id);  // default will set all cells to meadow
        }
    }
}


// setup the overall map size
function setUpMapSize(){
    graphic_map.style.height = mapSize * cellSize + 40 + 'px';
    graphic_map.style.width = mapSize * cellSize + 40 + 'px';
}


// set up the size and the position of the hero's block.
function setupHero(){
    graphic_hero.style.height = cellSize + 'px';
    graphic_hero.style.width = cellSize + 'px';
    graphic_hero.style.backgroundSize = cellSize + 'px';
    
    hero_top_pos = mapSize * cellSize - cellSize;
    hero_left_pos = 0;
    graphic_hero.style.left = hero_left_pos;
    graphic_hero.style.top = mapSize * cellSize - cellSize + 'px';
}


// Function to create a cell (a div element) with meadow terrain
// id: an id is a matrix coordinate, like "0-0", "1-5".
function createMeadowCell(leftPosition, upPosition, ID){
    var x = document.createElement("DIV");
    x.setAttribute("class", "default-cell meadow un-viewable");
    x.setAttribute("ID", ID);
    x.setAttribute("style", "left:"+leftPosition+"px; top:"+upPosition+"px; height:" + cellSize + "px; width:" + cellSize + "px; background-size:" + cellSize + "px");
    //x.classList.remove("un-viewable");
    graphic_map.appendChild(x);
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
function display_one_block(row, column){
    var coordinate = row + "-" + column;
    document.getElementById(coordinate).classList.remove("un-viewable");
}


// to display one block ahead when having one bincolur
function display_one_block_around(row, column){
    var coordinate = "";
    var i, j;
    for(i = row - 1; i <= row + 1; ++i){
        if(i < 0 || i >= mapSize){
            continue;
        }
        for(j = column - 1; j <= column + 1; j++){
            if(j < 0 || j >= mapSize){
                continue;
            }
            coordinate = i + "-" + j;
            document.getElementById(coordinate).classList.remove("un-viewable");
        }
    }
}

// to display two block ahead when having a pair of bincolur
function display_two_block_around(row, column){
    var coordinate = "";
    var i, j;
    for(i = row - 2; i <= row + 2; ++i){
        if(i < 0 || i >= mapSize){
            continue;
        }
        for(j = column - 2; j <= column + 2; j++){
            if(j < 0 || j >= mapSize){
                continue;
            }
            coordinate = i + "-" + j;
            document.getElementById(coordinate).classList.remove("un-viewable");
        }
    }
}



// function to move the hero up one square in the graphic map
function move_hero_up_graph(){
    if(hero_top_pos > 0)
        hero_top_pos -= cellSize;
    else   /* hero will cross to another side */
        hero_top_pos = mapSize * cellSize - cellSize;
    graphic_hero.style.top = hero_top_pos + 'px';
}

function move_hero_down_graph(){
    if(hero_top_pos < (mapSize * cellSize - cellSize))
        hero_top_pos += cellSize;
    else
        hero_top_pos = 0;
    graphic_hero.style.top = hero_top_pos + 'px';
}

function move_hero_left_graph(){
    if(hero_left_pos > 0)
        hero_left_pos -= cellSize;
    else
        hero_left_pos = mapSize * cellSize - cellSize;
    graphic_hero.style.left = hero_left_pos + 'px';
}

function move_hero_right_graph(){
    if(hero_left_pos < (mapSize * cellSize - cellSize))
        hero_left_pos += cellSize;
    else
        hero_left_pos = 0;
    graphic_hero.style.left = hero_left_pos + 'px';
}


