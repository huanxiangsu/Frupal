//File where global variables will are located


var map = [0,0];  // two dimensional array to store each map cell

//Elements for the hero game
var hero = {
  title: "Test Map",
  map_size: 25,
  row_coordinate: 0,
  column_coordinate: 0,
  energy: 100,
  whiffles: 1000,
  items: [
    "Axe", 
    "Axe", 
    "Shears", 
    "Pretty Rock"],
  known_cells: [
        [12,12,1,1,"None"],
        [13,12,0,1,"Tree"],
        [14,12,0,2,"None"]],
}

var cellSize = 40;  // each square's size measured in px. (can be any value)
var hero_left_pos = 0; // used to move hero within the graphic map
var hero_top_pos = 0;  // same above

var graphic_map = document.getElementById("map");
var startPage = document.getElementById("startPage");
var gamePage = document.getElementById("game");
var graphic_hero = document.getElementById("hero");

//The array that will store the information above
var saved_map_info = [];


