



// start, function to display the game 
// scripts to execute when clicked "new game"
function startGame(){


    // put code above
    setupMap();  // setup the game map, have all game element ready in the map
    display_one_block(0, 0);  // starting coordinate
    startPage.style.display = "none"; // hide the menu page
    gamePage.style.display = "block";  // display the game with the map and control-panel
}

// exit, remove all map cells and display starting menu when clicked "exit game"
// scripts to perform after exit game
function exitGame(){
    gamePage.style.display = "none";
    startPage.style.display = "block";
    removeAllCells();
    // put code below
}

//Called when exit game button is clicked. saves the information for the most recent map played onto localStorage. 
//It is all currently stored in an array,called saved_map_info, with each index of the array containing each object.
//For example, saved_map_info[0] contains the title of the map. saved_map_info[5] contains all the cells we know anything about.
function saveMap() {
    var title = "Test Map";
    var map_size = 25;
    var hero_cell = [12,12];
    var energy = 103;
    var whiffles = 1000;
    var items = [
        "Axe",
        "Axe",
        "Shears",
        "Pretty Rock"]
    var known_cells = [
        [12,12,1,1,"None"],
        [13,12,0,1,"Tree"],
        [14,12,0,2,"None"]];
    var saved_map_info = [];

    saved_map_info.push(title);
    saved_map_info.push(map_size);
    saved_map_info.push(hero_cell);
    saved_map_info.push(energy);
    saved_map_info.push(whiffles);
    saved_map_info.push(items);
    saved_map_info.push(known_cells);
    
    localStorage.setItem("saved_game", JSON.stringify(saved_map_info));
}

function continueGame(){

}
