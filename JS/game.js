var hero_energy = 100;
//var xpos = 0;
//var ypos = 0;

document.getElementById("currentlocation").value=get_hero_position();
document.getElementById("energy").value=get_energy();

// get the coordinates of the position the hero is at
function get_hero_position(){
//	return xpos + "," + ypos;
	return hero.row_coordinate + ", " + hero.column_coordinate;
}
// update location of the hero
function updateloc(){
	document.getElementById("currentlocation").value=get_hero_position();	
}
// get the amount of energy the hero has left
function get_energy(){
	return hero_energy;
}
// decrement energy by one
function update_energy(){
	document.getElementById("energy").value = get_energy() - 1;
	hero_energy--;
}

function movement()
{
	updateloc();
	update_energy();
	win_game();
}


