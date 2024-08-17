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

let smashKick = new Move(["colorless", "colorless"], "Smash Kick", 20);
let flameTail = new Move(["fire", "fire"], "Flame Tail", 30);
let ponyta = new PokemonCard("pokemon", "Ponyta", "basic", 40, "fire", [smashKick, flameTail], "water", "none", 1, "/images/ponyta.jpg");


let displayedCard = document.getElementById("displayedCard");
displayedCard.innerHTML = `
    <h2>${ponyta.name}</h2>
    <img src="${ponyta.image}"</img>
`;