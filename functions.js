// fetch("https://github.com/PokemonTCG/pokemon-tcg-data/blob/master/cards/en/base1.json").then(function(response) {
//     console.log(response);
// });
// const {pikachu, ponyta} = require("./card-list.js");
// import { pikachu, ponyta } from "./card-list";

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
    return selfHarm;
}



// module.exports = coinFlip;
// module.exports = ifHeadsSelfDmg;
// module.exports = attack;

// export {coinFlip, ifHeadsSelfDmg, attack};