//if encounter a tool on the map (I don't mean me) the player will be prompted
//to buy. Then, using Huanxiang's functions, it removes the icon from the map
//and sets the coordinate obstacle to "None"
function encounter_tool(tool){
    price = tools[tool][0];
    var response = confirm("You found a " + tool + "! Would you like to purchase it for " + price + " whiffles?");
    if(response == true){
        if(hero.whiffles < price){
            alert("Sorry! you don't have enough whiffles to purchase this item!");
        }
        else{
	    var chainsaw_sound = document.getElementById('chainsaw_sound');
	    var jackhammer_sound = document.getElementById('jackhammer_sound'); 
	    var axe_sound = document.getElementById('axe_sound'); 
	    var shears_sound = document.getElementById('shears_sound'); 
	    var soundFlag = true;
	    if(soundFlag)
	    {
	   	if(tool == "Chainsaw")
		{
			chainsaw_sound.pause();
			chainsaw_sound.currentTime = 0;
			chainsaw_sound.play();
			soundFlag = false;
		}
		if(tool == "Jackhammer")
		{
			jackhammer_sound.pause();
			jackhammer_sound.currentTime = 0;
			jackhammer_sound.play();
			soundFlag = false;
		}
		if(tool == "Axe")
		{
			axe_sound.pause();
			axe_sound.currentTime = 0;
			axe_sound.play();
			soundFlad = false;
		}
		if(tool == "Shears")
		{
			shears_sound.pause();
			shears_sound.currentTime = 0;
			shears_sound.play();
			soundFlag = false;
		}
	    }
            hero.whiffles -= price;   // deducted money by the cost of the hatchet
            document.getElementById("whiffles").value = hero.whiffles;  
            hero.items.push(tool); 
            add_to_inventory(tool);  
            remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
            map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";  
        }
    }
}


