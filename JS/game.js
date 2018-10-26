function startGame(){
    var menu = document.getElementById("startPage");
    var game = document.getElementById("game");
    menu.style.display = "none";
    game.style.display = "block";
}

function exitGame(){
    var menu = document.getElementById("startPage");
    var game = document.getElementById("game");
    menu.style.display = "block";
    game.style.display = "none";
}