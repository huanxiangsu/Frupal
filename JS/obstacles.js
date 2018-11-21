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

// Get the x,y location of the blackberry bush
function get_bush_loc()
{
  return bush.x +',' + bush.y;
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

// Get the x,y location of the tree
function get_tree_loc()
{
  return tree.x +',' + tree.y;
}


