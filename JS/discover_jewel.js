
function create_royal_jewel()
{
  jewel.x = Math.floor(Math.random()*(mapSize+1));
  jewel.y = Math.floor(Math.random()*(mapSize+1));
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



