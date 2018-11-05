function create_royal_jewel()
{
  jewel.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  jewel.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  map[jewel.x][jewel.y].obstacle = "Jewel";  // use to display jewel image in the cell
}

function get_jewel_loc()
{
  return jewel.x +',' +jewel.y;
}

function win_game()
{
  if ( (eval(hero.row_coordinate) == eval(jewel.x)) && (eval(hero.column_coordinate) == eval(jewel.y)) )
  {
    alert("Royal Jewel Found! Game over.");
  }
}



