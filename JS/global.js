//File where global variables will are located

/* ************************ map file information **************************/
var title = "";
var mapSize = 0;

//Elements for the hero game
var hero = {
  row_coordinate: 0,
  column_coordinate: 0,
  energy: 0,   // default
  whiffles: 0,  // default
  items: [],
}

//contains the coordinates of the royal diamond jewel on the map
var jewel = {
  x: 0,
  y: 0,
}
// contains the coordinates of the power bar on the map
var powerbar = {
  x: 0,
  y: 0,
}
// contains the coordinates of type 1 treasure on the map
var t_1 = {
  x: 0,
  y: 0,
}
// contains the coordinates of blackberry bush on the map
var bush = {
  x: 0,
  y: 0,
  energy: 4  // energy required to remove the bush by hand
}

// contains the coordinates of rock on the map
var rock = {
  x: 0,
  y: 0,
  energy: 16 //energy required to remove the rock by hand
}

// contains the coordinates of tree on the map
var tree = {
  x: 0,
  y: 0,
  energy: 10 // energy required to remove the tree by hand
}


//dictionary of the tools with names as keys with a value of an array[0]=cost and array[1]=energy used to apply
var tools = {
    "Hatchet":[15,8],
    "Axe":[30,6],
    "Chainsaw":[60,2],
    "Chisel":[5,15],
    "Sledgehammer":[25,12],
    "Jackhammer":[100,4],
    "Machete":[25,2],
    "Shears":[35,2]
};
var powerbar_sound = document.getElementById('powerbar_sound');
var map;  // two dimensional array to store each map cell
// when parsing script performed successfully, it can use as:
// example: map[3][5].row  map[3][5].col  map[3][5].visibility  map[3][5].terrain  map[3][5].obstacle
// each element in this two dimensional array is a class of map_cell that declared below.

class map_cell {  // for each map cell's property
    constructor(x, y) {
        this.row = x;
        this.column = y;
        this.visibility = 0;
        this.terrain = 0;
        this.obstacle = "None";
    }
}
/* ************************* End map file information ******************************/



/*************************** graphic map information ******************************/
var cellSize = 40;  // each square's actual size measured in px. (can be any value)
var hero_left_pos = 0; // the graphic hero's position measured in px.
var hero_top_pos = 0;  // same above

var graphic_map = document.getElementById("map");
var startPage = document.getElementById("startPage");
var gamePage = document.getElementById("game");
var graphic_hero = document.getElementById("hero");
/*************************** End graphic map information ***************************/


// for state-preserving file 
var saved_map_info = [];
