



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


function continueGame(){

}