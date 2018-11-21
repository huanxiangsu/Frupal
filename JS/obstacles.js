// Load the blackberry bush into a random cell in the map.
function create_blackberry_bush()
{

  bush.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  bush.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  map[bush.x][bush.y].obstacle = "Bush";  // use to display blackberry bush image in the cell

}

// Get the x,y location of the blackberry bush
function get_bush_loc()
{
  return bush.x +',' + bush.y;
}


// Load the rock into a random cell in the map.
function create_rock()
{

  rock.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  rock.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  map[rock.x][rock.y].obstacle = "Rock";  // use to display rock image in the cell

}

// Get the x,y location of the rock
function get_rock_loc()
{
  return rock.x +',' + rock.y;
}





// Load the tree into a random cell in the map.
function create_tree()
{
  tree.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  tree.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  map[tree.x][tree.y].obstacle = "Tree";  // use to display tree image in the cell

}

// Get the x,y location of the tree
function get_tree_loc()
{
  return tree.x +',' + tree.y;
}


