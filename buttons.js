const attack = require("./functions.js");

let enemyHP = pikachu.hp;
let attack1 = ponyta.moves[0];

let attackButton = document.getElementById("attackButton");
attackButton.addEventListener("click", attack(0))