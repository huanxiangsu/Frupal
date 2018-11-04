/*
  This file should only contain codes for graphic map manipulation
*/

//document.getElementById("moveUp").addEventListener("click", move_hero_up_graph);
//document.getElementById("moveDown").addEventListener("click", move_hero_down_graph);
//document.getElementById("moveLeft").addEventListener("click", move_hero_left_graph);
//document.getElementById("moveRight").addEventListener("click", move_hero_right_graph);
// 


/*
  The main function to setup a basic graphic map
  call this function when enter a new game or continue game
*/
function setupMap(){
    setUpMapSize();  // setup the size of the map frame
    setupHero();  // set the hero size to fit into a square and put it in (0,0).
 
    var l_pos = 0;
    var u_pos = 0;
    var row = 0;
    
    for(i = 0; i < mapSize; i++){
        u_pos = i * cellSize;
        row = mapSize - (i+1);  // row from (mapSize-1) to 0
        for(j = 0; j < mapSize; j++){
            l_pos = j * cellSize;
            createTerrainCell(l_pos, u_pos, row, j, map[row][j].terrain);
            create_item_in_cell(l_pos, u_pos, row, j, map[row][j].obstacle);
            //create_item_in_cell(l_pos, u_pos, row, j, "Powerbar");
            if(map[row][j].visibility == 1){
                display_one_block(row, j);
            }
        }
    }
    display_one_block_around(hero.row_coordinate, hero.column_coordinate);
    //display_all_blocks();  // for testing only
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
    hero_top_pos = mapSize * cellSize - cellSize * (hero.row_coordinate + 1);
    hero_left_pos = hero.column_coordinate * cellSize;
    graphic_hero.style.left = hero_left_pos + 'px';
    graphic_hero.style.top = hero_top_pos + 'px';
}

function createTerrainCell(leftPosition, upPosition, row, col, terrain){
    var x = document.createElement("DIV");
    var ID = row + "-" + col;
    if(terrain == 0)  // meadow
        x.setAttribute("class", "default-cell meadow un-viewable");
    else if(terrain == 1)  // forest
        x.setAttribute("class", "default-cell forest un-viewable");
    else if(terrain == 2)  // river
        x.setAttribute("class", "default-cell water un-viewable");
    else if(terrain == 3)  // wall
        x.setAttribute("class", "default-cell wall un-viewable");
    else if(terrain == 4)  // bog
        x.setAttribute("class", "default-cell bog un-viewable");
    else if(terrain == 5)  // swamp
        x.setAttribute("class", "default-cell swamp un-viewable");
    else  // for any number other than 0-5, set to default meadow
        x.setAttribute("class", "default-cell meadow un-viewable");
    
    x.setAttribute("ID", ID);
    x.setAttribute("style", "left:" + leftPosition + "px; top:" + upPosition + "px; height:" + cellSize + "px; width:" + cellSize + "px;");
    graphic_map.appendChild(x);
}


// to add obstacle or item in the cell
function create_item_in_cell(leftPosition, upPosition, row, col, cell_item){
    if(cell_item != "None"){  
        var ID = row + "--" + col;
        var x = document.createElement("DIV");
        x.setAttribute("class", "default-item " + cell_item);
        x.setAttribute("ID", ID);
        x.setAttribute("style", "left:"+leftPosition+"px; top:"+upPosition+"px; height:" + cellSize + "px; width:" + cellSize + "px;");
        graphic_map.appendChild(x);
    }
}

// to remove obstacle or item from the cell
function remove_item_in_cell(row, col){
    var ID = row + '--' + col;
    var a_item = document.getElementById(ID);
    a_item.parentNode.removeChild(a_item);
}


// remove all div elements within the map when exit.
function removeAllCells(){
    var cells = document.getElementsByClassName("default-cell");
    var items = document.getElementsByClassName("default-item");
    while(cells.length > 0){
        cells[0].parentNode.removeChild(cells[0]);
    }
    while(items.length > 0){
        items[0].parentNode.removeChild(items[0]);
    }
}


// function to display a block to viewable when the hero move to a specific coordinate.
// argument should be in matrix coordinate, ex. (1,2) : row = 1, column = 2
function display_one_block(row, column){
    var coordinate = row + "-" + column;
    document.getElementById(coordinate).classList.remove("un-viewable");
}


// to display one block around the hero when having one bincolur
// also update the visibility value of those viewable blocks.
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
            map[i][j].visibility = 1;  // update map file
            document.getElementById(coordinate).classList.remove("un-viewable");
        }
    }
}

// to display two block ahead when having a pair of bincolurs
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
            map[i][j].visibility = 1;  // update map file
            document.getElementById(coordinate).classList.remove("un-viewable");
        }
    }
}

// to display all blocks - for testing only
function display_all_blocks(){
    var cells = document.getElementsByClassName("default-cell");
    var i = 0;
    while(i < cells.length){
        cells[i].classList.remove("un-viewable");
        ++i;
    }
}


// function to move the hero up one square in the graphic map
/*  
  the actual movement function should call these four functions when hero's coordinate successfully changed
  instead of writing any codes that are unrelated to graphic map within these four functions.
  these four functions are just a small part of the actual movement scripts that manipulate 
  the hero's real coordinate that from the map file.
*/
function move_hero_up_graph(){
    if(hero_top_pos > 0)
        hero_top_pos -= cellSize;
    else   /* hero will cross to another side */
        hero_top_pos = mapSize * cellSize - cellSize;
    $("#hero").animate({top : hero_top_pos + 'px'}, 200);
    //graphic_hero.style.top = hero_top_pos + 'px';
}

function move_hero_down_graph(){
    if(hero_top_pos < (mapSize * cellSize - cellSize))
        hero_top_pos += cellSize;
    else
        hero_top_pos = 0;
    $("#hero").animate({top : hero_top_pos + 'px'}, 200);
    //graphic_hero.style.top = hero_top_pos + 'px';
}

function move_hero_left_graph(){
    if(hero_left_pos > 0)
        hero_left_pos -= cellSize;
    else
        hero_left_pos = mapSize * cellSize - cellSize;
    $("#hero").animate({left : hero_left_pos + 'px'}, 200);
    //graphic_hero.style.left = hero_left_pos + 'px';
}

function move_hero_right_graph(){
    if(hero_left_pos < (mapSize * cellSize - cellSize))
        hero_left_pos += cellSize;
    else
        hero_left_pos = 0;
    $("#hero").animate({left : hero_left_pos + 'px'}, 200);
    //graphic_hero.style.left = hero_left_pos + 'px';
}


// to support keyboard event for moving the hero.
// ↑ or w for up, ↓ or s for down, ← or a for left, → or d for right
$("#map").keyup(function(){
    //console.log(event);
    var x = event.which;
    if (x == 37 || x == 65) {  //left: ← or a
        move_left();
    }
    else if (x == 38 || x == 87) {  // up: ↑ or w
        move_up();
    }
    else if (x == 39 || x == 68) {  // right: → or d
        move_right();
    }
    else if (x == 40 || x == 83) {  // down: ↓ or s
        move_down();
    }
    else{}
});
// prevent default for arrowkeys
$("#map").keydown(function(){
    event.preventDefault();
});
