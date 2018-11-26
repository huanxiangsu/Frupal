// generate treasure on map
function create_treasure_1(){
  var row, column;
    var i = 0;
    var added = 0;
    while(i < mapSize*mapSize){
        row = Math.floor(Math.random()*(mapSize));
        column = Math.floor(Math.random()*(mapSize));

        // if this location contains other item already, loop again. default value for obstacle is "None"
        if(map[row][column].obstacle != "None"){
            ++i;
            continue;
        }
        else{
	    map[row][column].obstacle = "Treasure1";
	    ++i;
	    ++added;
	    if(added == 2) // add up to 2 treasure1
              break;
        }
    }
}

// function that removes the treasure chest from the map, this function is called once whiffles are updated
function delete_treasure_1(){
  remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
  map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";
}

// this function tells the user they have found treasure & updates whiffles
function encounter_treasure_1(){
 if(map[hero.row_coordinate][hero.column_coordinate].obstacle == "Treasure1"){
    alert("You found a Type 1 Treasure Chest! 100 whiffles have been added to your bank account.");
  var treasure1_sound = document.getElementById('treasure1_sound');
  var soundFlag = true;
  if(soundFlag)
  {
 	treasure1_sound.pause();
	treasure1_sound.currentTime = 0;
	treasure1_sound.play();
	soundFlag = false;
  }
 
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
    var treasure2_sound = document.getElementById('treasure2_sound');
    var soundFlag = true;
    if(soundFlag)
    {
   	treasure2_sound.pause();
	treasure2_sound.currentTime = 0;
	treasure2_sound.play();
	soundFlag = false;
    }
    hero.whiffles = 0;
    document.getElementById("whiffles").value = get_whiffles();
    remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
    map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";
    alert("OH NO! The treasure was a trap, you lost your whiffles!");
  }
}

//Check if the hero was encountered any treasure type
function treasure() {
  encounter_treasure_1();
  encounterTreasure2();
}
