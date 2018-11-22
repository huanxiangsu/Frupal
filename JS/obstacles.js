// Load the blackberry bush into a random cell in the map.
function create_blackberry_bush()
{
  var i = 0;
  while (i < mapSize*mapSize)
  {
      bush.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
      bush.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)

      // Check if the map doesnt contain any other item at that location
      if (map[bush.x][bush.y].obstacle == "None")
      {
          map[bush.x][bush.y].obstacle = "Blackberry";  // use to display blackberry bush image in the cell
          break;
      }
      // map cell contains some other item. Find new (x,y) location for the obstacle.
      else
      {
	++i;
	continue;		
      }
   }
}

// Get the x,y location of the blackberry bush
function get_bush_loc()
{
  return bush.x +',' + bush.y;
}

//hero lands in a cell containing blackberry bushes
function encounter_bush()
{
   if ((eval(hero.row_coordinate) == eval(bush.x)) && (eval(hero.column_coordinate) == eval(bush.y)))
   {

   	//lose energy for moving into that map cell
	var energyLost = 0;
      
	document.getElementById("terrain").value = "Blackberry Bush" 
	//tools that can remove the bush: machete, shears

 	// check if the inventory contains a machete	
	if (hero.items.includes("Machete"))
	{
		
		energyLost = tools["Machete"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Machete"),1);		
	}
 	// check if the inventory contains a pair of shears	
	else if (hero.items.includes("Shears"))
	{
		energyLost = tools["Shears"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Shears"),1);		
	}
 	// hero doesn't have a tool. Remove obstacle by hand	
	else
	{
   		//remove blacckberry bush by hand: 4 energy points
		energyLost = bush.energy;
//		document.getElementById("messages").value = "Removing obstacle by hand"
	}

	//calculate remaining energy
        var energyRemaining = hero.energy - energyLost;
	
	if (energyRemaining <= 0)
        {
		alert("You do not have enough energy to remove the blackberry bush! Game over!")
		game_over();

  	}
	else
	{
		hero.energy = energyRemaining;
		document.getElementById("energy").value = hero.energy;
		remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);  // remove the graphic item in the graphic map
		map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";  // set this cell's item to "None" in map file after removed from graphic map, must be in this sequence.  
		bush.x = null;
		bush.y = null;	
	}
     }
}








// Load the rock into a random cell in the map.
function create_rock()
{

  var i = 0;
  //loop to get (x,y) coordinates for rock
  while (i < mapSize*mapSize)
  {
      rock.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
      rock.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)

      // Check if the map doesnt contain any other item at that location
      if (map[rock.x][rock.y].obstacle == "None")
      {
          map[rock.x][rock.y].obstacle = "Boulder";  // use to display boulder image in the cell
          break;
      }
      // map cell contains some other item. Find new (x,y) location for the obstacle.
      else
      {
	++i;
	continue;		
      }
  }
}

// Get the x,y location of the rock
function get_rock_loc()
{
  return rock.x +',' + rock.y;
}





// Load the tree into a random cell in the map.
function create_tree()
{

  var i = 0;
  //loop to get (x,y) coordinates for rock
  while (i < mapSize*mapSize)
  {
      tree.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
      tree.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)

      // Check if the map doesnt contain any other item at that location
      if (map[tree.x][tree.y].obstacle == "None")
      {
          map[tree.x][tree.y].obstacle = "Tree";  // use to display tree image in the cell
          break;
      }
      // map cell contains some other item. Find new (x,y) location for the obstacle.
      else
      {
	++i;
	continue;		
      }
  }
}

// Get the x,y location of the tree
function get_tree_loc()
{
  return tree.x +',' + tree.y;
}


