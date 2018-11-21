//if encounter a tool on the map (I don't mean me) the player will be prompted
//to buy. Then, using Huanxiang's functions, it removes the icon from the map
//and sets the coordinate obstacle to "None"
function encounter_tool(tool){
    price = tools[tool[0]];
    var response = confirm("You found a " + tool + "! Would you like to purchase it for " + price + " whiffles?");
    if(response == true){
        if(hero.whiffles < price){
            alert("Sorry! you don't have enough whiffles to purchase this item!");
        }
        else{
            hero.whiffles -= price;   // deducted money by the cost of the hatchet
            document.getElementById("whiffles").value = hero.whiffles;  
            hero.items.push(tool); 
            add_to_inventory(tool);  
            remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
            map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";  
        }
    }
}


