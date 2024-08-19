// fetch("https://github.com/PokemonTCG/pokemon-tcg-data/blob/master/cards/en/base1.json").then(function(response) {
//     console.log(response);
// });
const pikachu = require("./card-list.js");
const ponyta = require("./card-list.js");

function coinFlip(){
    let result = Math.floor(Math.random()*2)
    if(result===0){
        return "tails"
    }else{
        return "heads"
    }
}

function ifHeadsSelfDmg(dmg){
    let selfHarm = 0;
    if(coinFlip === "tails"){
        selfHarm = dmg;
    }
}

function attack(move){
    let attackPower = ponyta.moves[move].damage;
    console.log(`${ponyta.name} used ${ponyta.moves[move].name}!`)
    return attackPower;
}

module.exports = coinFlip;
module.exports = ifHeadsSelfDmg;
module.exports = attack;