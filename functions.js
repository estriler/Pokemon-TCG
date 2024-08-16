// fetch("https://github.com/PokemonTCG/pokemon-tcg-data/blob/master/cards/en/base1.json").then(function(response) {
//     console.log(response);
// });

function coinFlip(){
    let result = Math.floor(Math.random()*2)
    if(result===0){
        return "tails"
    }else{
        return "heads"
    }
}