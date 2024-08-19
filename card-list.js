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

let displayedCard = document.getElementById("displayedCard");
displayedCard.innerHTML = `
    <img src="${ponyta.image}" class="displayedCard"></img>
`;