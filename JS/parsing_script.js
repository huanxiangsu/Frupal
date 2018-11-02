// remove comments if you want to do test
//var str = '["Sample Frupal Game Map","25","######################","12,12","103","1000","Axe","Axe","Shears","Pretty Rock","######################","12,12,1,1,None","13,12,0,1,Tree","14,12,0,2,None"]';
//localStorage.setItem('map', str);
//var test = document.getElementById("test");


function parse_map_file(){
    var file = JSON.parse(localStorage.getItem("map"));

    title = file[0];
    mapSize = eval(file[1]);
    // file[2] is ############

    // parsing hero's info
    var coord = file[3].split(',');  // 12,12
    hero.row_coordinate = eval(coord[0]);
    hero.column_coordinate = eval(coord[1]);
    hero.energy = eval(file[4]);
    hero.whiffles = eval(file[5]);
    var i = 6;  // file[6] is hero's items until ####..
    while(file[i][0] != '#'){  // loop until #####..
        hero.items.push(file[i]);  // add to hero's item array
        ++i;  // next item
    }
    // file[i] is ############

    // define two dimentional array to store each map cell based on the value of mapSize
    var a, b;
    map = new Array(mapSize);
    for (a = 0; a < mapSize; a++){
        map[a] = new Array(mapSize);
    }
    // store map_cell object to each two-d array
    for(a = 0; a < mapSize; ++a){
        for(b = 0; b < mapSize; ++b){
            map[a][b] = new map_cell(a, b);
        }
    }
    // end define

    ++i;  // now beginning of file[i] to the end are all map cells information
    var a_cell;
    while(file[i] != undefined){
        a_cell = file[i].split(',');
        /* a_cell[0] = row, a_cell[1] = column, a_cell[2] = visibility value (0 or 1)
           a_cell[3] = terrain value, a_cell[4] = obstacle or item in the map */
        map[eval(a_cell[0])][eval(a_cell[1])].visibility = eval(a_cell[2]);
        map[eval(a_cell[0])][eval(a_cell[1])].terrain = eval(a_cell[3]);
        map[eval(a_cell[0])][eval(a_cell[1])].obstacle = a_cell[4];
        ++i; // increment to next map cell
    }
}



parse_map_file();


//ttest();
function ttest(){
    test.innerHTML = map_name + " + " + mapSize + "<br>";
    test.innerHTML += hero.row_coordinate + " + " + hero.col_coordinate + "<br>";
    test.innerHTML += hero.energy + " + " + hero.money + "<br>";
    for (x in hero.items){
        test.innerHTML += hero.items[x] + "<br>";
    }
    test.innerHTML += map[13][12].obstacle + "<br>";

    var i, j;
    for(i = 0; i < mapSize; i++){
        for(j = 0; j < mapSize; j++){
            test.innerHTML += map[i][j].row + ',' + map[i][j].col + ',' + map[i][j].visibility + ',' + map[i][j].terrain + ',' + map[i][j].obstacle + "<br>";
        }
    }
}
