// generate treasure on map
function create_treasure_1(){
  t_1.x = Math.floor(Math.random()*(mapSize));
  t_1.y = Math.floor(Math.random()*(mapSize));
  map[t_1.x][t_1.y].obstacle = "Treasure1";
}

// function that removes the treasure chest from the map, this function is called once whiffles are updated
function delete_treasure_1(){
  remove_item_in_cell(t_1.x,t_1.y);
  map[t_1.x][t_1.y].obstacle = "None";
  t_1.x = null;
  t_1.y = null;
}

// this function tells the user they have found treasure & updates whiffles
function encounter_treasure_1(){
  if((eval(hero.row_coordinate) == eval(t_1.x)) && (eval(hero.column_coordinate) == eval(t_1.y))){
    alert("You found a Type 1 Treasure Chest! 100 whiffles have been added to your bank account.");

    // increase bank account & update bank account display
    hero.whiffles += 100;
    document.getElementById("whiffles").value = hero.whiffles;

    // remove the treasure chest from map
    delete_treasure_1();
    }
}

// Function to check if hero encountered a treasure2
function encounterTreasure2 () {
  //If at a treasure2, the hero's whiffles goes to 0.
  if (map[hero.row_coordinate][hero.column_coordinate].obstacle == "Treasure2") {
    hero.whiffles = 0;
    document.getElementById("whiffles").value = get_whiffles();
    remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
    map[hero.row_coordinate][hero.column_coordinate].obstacle == "None";
    alert("OH NO! The treasure was a trap, you lost your whiffles!");
  }
}

//Check if the hero was encountered any treasure type
function treasure() {
  encounter_treasure_1();
  encounterTreasure2();
}
