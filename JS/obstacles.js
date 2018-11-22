// Load the blackberry bush into a random cell in the map.
function create_blackberry_bush()
{
  var i = 0;
  
  // Check if the map cell doesnt contain any other item
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
   		//remove blackberry bush by hand: 4 energy points
		energyLost = bush.energy;
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




//hero lands in a cell containing rocks and boulders
function encounter_rock()
{
   if ((eval(hero.row_coordinate) == eval(rock.x)) && (eval(hero.column_coordinate) == eval(rock.y)))
   {

   	//lose energy for moving into that map cell
	var energyLost = 0;
      
	document.getElementById("terrain").value = "Rocks and Boulder" 
	//tools that can remove the rocks and boulders: jackhammer, sledgehammer, chisel

 	// check if the inventory contains a jackhammer
	if (hero.items.includes("Jackhammer"))
	{
		
		energyLost = tools["Jackhammer"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Jackhammer"),1);		
	}
 	// check if the inventory contains a sledgehammer	
	else if (hero.items.includes("Sledgehammer"))
	{
		energyLost = tools["Sledgehammer"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Sledgehammer"),1);		
	}
 	// check if the inventory contains a chisel	
	else if (hero.items.includes("Chisel"))
	{
		energyLost = tools["Chisel"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Chisel"),1);		
	}
 	// hero doesn't have a tool. Remove obstacle by hand	
	else
	{
   		//remove rock by hand: 16 energy points
		energyLost = rock.energy;
	}

	//calculate remaining energy
        var energyRemaining = hero.energy - energyLost;
	
	if (energyRemaining <= 0)
        {
		alert("You do not have enough energy to remove the rock! Game over!")
		game_over();

  	}
	else
	{
		hero.energy = energyRemaining;
		document.getElementById("energy").value = hero.energy;
		remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);  // remove the graphic item in the graphic map
		map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";  // set this cell's item to "None" in map file after removed from graphic map, must be in this sequence.  
		rock.x = null;
		rock.y = null;	
	}
     }
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



//hero lands in a cell containing trees
function encounter_tree()
{
   if ((eval(hero.row_coordinate) == eval(tree.x)) && (eval(hero.column_coordinate) == eval(tree.y)))
   {

   	//lose energy for moving into that map cell
	var energyLost = 0;
      
	document.getElementById("terrain").value = "Trees" 
	//tools that can remove the rocks and boulders: hatchet, axe, chainsaw

 	// check if the inventory contains a hatchet
	if (hero.items.includes("Hatchet"))
	{
		
		energyLost = tools["hatchet"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Hatchet"),1);		
	}
 	// check if the inventory contains an axe	
	else if (hero.items.includes("Axe"))
	{
		energyLost = tools["Axe"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Axe"),1);		
	}
 	// check if the inventory contains a chainsaw	
	else if (hero.items.includes("Chainsaw"))
	{
		energyLost = tools["Chainsaw"][1];
		//remove the tool from the inventory
		hero.items.splice(hero.items.indexOf("Chainsaw"),1);		
	}
 	// hero doesn't have a tool. Remove obstacle by hand	
	else
	{
   		//remove Trees by hand: 10 energy points
		energyLost = tree.energy;
	}

	//calculate remaining energy
        var energyRemaining = hero.energy - energyLost;
	
	if (energyRemaining <= 0)
        {
		alert("You do not have enough energy to remove the tree! Game over!")
		game_over();

  	}
	else
	{
		hero.energy = energyRemaining;
		document.getElementById("energy").value = hero.energy;
		remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);  // remove the graphic item in the graphic map
		map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";  // set this cell's item to "None" in map file after removed from graphic map, must be in this sequence.  
		tree.x = null;
		tree.y = null;	
	}
     }
}
