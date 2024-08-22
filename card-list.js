class PokemonCard {
    constructor(cardType, name, stage, hp, type, moves, weakness, resisance, retreatCost, image){
        this.cardType = cardType;
        this.name = name;
        this.stage = stage;
        this.hp = hp;
        this.type = type;
        this.moves = moves;
        this.weakness = weakness;
        this.resisance = resisance;
        this.retreatCost = retreatCost;
        this.image = image;
    }
}

class EnergyCard {
    constructor(cardType, type, amount, image){
        this.cardType = cardType;
        this.type = type;
        this.amount = amount;
        this.image = image;
    }
}

class TrainerCard {
    constructor(cardType, name, effect, image){
        this.cardType = cardType;
        this.name = name;
        this.effect = effect;
        this.image = image;
    }
}

class Move {
    constructor(energyCost, moveName, damage, effect = "na"){
        this.energyCost = energyCost;
        this.moveName = moveName;
        this.damage = damage;
        this.effect = effect;
    }
}

//Card List
//58_102
let gnaw = new Move (["colorless"], "Gnaw", 10);
let thunderJolt = new Move (["lightning", "colorless"], "Thunder Jolt", 30, ifHeadsSelfDmg(10));
let pikachu = new PokemonCard("pokemon", "Pikachu", "basic", 40, "electric", [gnaw, thunderJolt], "fighting", "none", 1, "/images/pikachu.jpg")

//60_102
let smashKick = new Move(["colorless", "colorless"], "Smash Kick", 20);
let flameTail = new Move(["fire", "fire"], "Flame Tail", 30);
let ponyta = new PokemonCard("pokemon", "Ponyta", "basic", 40, "fire", [smashKick, flameTail], "water", "none", 1, "/images/ponyta.jpg");

let enemyCard = document.getElementById("enemyCard");
enemyCard.innerHTML = `
    <img src="${pikachu.image}" class="enemyCard"></img>
`;

// let enemyHp = document.getElementById("enemyHp");
// enemyHp.innerHTML = `
//     Hp: ${pikachu.hp}
// `;

//Displays active card ie Ponyta
let displayedCard = document.getElementById("displayedCard");
displayedCard.innerHTML = `
    <img src="${ponyta.image}" class="displayedCard"></img>
`;

let activePkmnHp = document.getElementById("activePkmnHp");
activePkmnHp.innerHTML = `
    Hp: ${ponyta.hp}
`;

let opponentActivePokemon = [pikachu];
let myActivePokemon = [ponyta];

let opponentDiscardPileArr = [];
let myDiscardPileArr = [];

let opponentPrizeCardsArr = [];
let myPrizeCardsArr = [];



window.addEventListener("load", function() {
    let displayedEnemyHP = pikachu.hp;
    let attack1 = ponyta.moves[0];
    let knockedOut = false;
    console.log(opponentDiscardPileArr);

    let enemyHp = document.getElementById("enemyHp");
        enemyHp.innerHTML = `
            Hp: ${displayedEnemyHP}
        `;

    function attack(){
        // let move = ponyta.moves[0];
        let attackPower = attack1.damage;
        console.log(`${ponyta.name} used ${attack1.moveName}! It had an attack power of ${attackPower}!`);
        let previousHP = displayedEnemyHP;
        displayedEnemyHP = displayedEnemyHP - attackPower;
        console.log(`${pikachu.name}'s Hp went down from ${previousHP} to now ${displayedEnemyHP}`);
        previousHP = displayedEnemyHP;
        if(displayedEnemyHP <= 0){
            knockedOutFunction(opponentActivePokemon[0]);
        }
        enemyHp.innerHTML = `
            Hp: ${displayedEnemyHP}
        `;
        return displayedEnemyHP;
    }

    function knockedOutFunction(pkmn){
        console.log(`${pkmn} is knocked out!!!`);
        knockedOut = true;
        enemyCard.innerHTML = `
            <h2 class="enemyCard" style="background-color:red">KO!</h2>
        `;
        opponentDiscardPileArr.push(opponentActivePokemon.pop());
        console.log("Opponent's discard pile is now " + opponentDiscardPileArr.length);
        let opponentDiscardPile = document.getElementById("opponentDiscardPileClass");
        opponentDiscardPile.innerHTML = `
            <img src="/images/cardBack.png" class="opponentDiscardPileClass"></img>
        `;
    }

    function takePrizeCard(){

    }
    // while(!knockedOut){
        
    // }
    
    let attackButton = document.getElementById("attackButton");
    attackButton.addEventListener("click", attack);
});


// module.exports = pikachu;
// module.exports = ponyta;
// export {pikachu, ponyta};