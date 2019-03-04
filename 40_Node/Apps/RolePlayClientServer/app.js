// Base class for participant in game.
class Participant {
    constructor(name, healthPoints, maxDamage) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.maxDamage = maxDamage;
        this.description = name;
    }

    // Returns a random number between 0 and maxDamage, representing 
    // the damage dealt by the participant in one attack.
    dealDamage() {
        var damage = Math.random() * this.maxDamage;
        return damage;
    }

    // Decreases the health points of the participant by the amount 
    // specified in the damagePoints parameter.
    receiveDamage(damagePoints) {
        this.healthPoints -= damagePoints;
    }
    
    // Predicate for deciding whether or not the participant is dead,
    // defined as having 0 or less health points.
    isDead() {
        return this.healthPoints <= 0;
    }
}

// Class representing a Hero participant.
class Hero extends Participant {
    constructor(name, healthPoints, role, level, goldFunds, maxDamage) {
        super(name, healthPoints, maxDamage);
        this.role = role;
        this.level = level;
        this.goldFunds = goldFunds;
        this.description += " (Hero) ";
    }
    
    // Pseudo-constructor for being able to create a full Hero object
    // from e.g. a de-serialized object.
    static build(obj) {
        return new Hero(obj.name, obj.healthPoints, obj.role, obj.level, obj.goldFunds, obj.maxDamage);
    }
}

// Class representing a Beast participant.
class Beast extends Participant {
    constructor(name, healthPoints, goldValue, maxDamage) {
        super(name, healthPoints, maxDamage);
        this.goldValue = goldValue;
        this.description += " (Beast) ";
    }
    
    // Pseudo-constructor for being able to create a full Beast object
    // from e.g. a de-serialized object.
    static build(obj) {
        return new Beast(obj.name, obj.healthPoints, obj.goldValue, obj.maxDamage);
    }
}

// This class represents the complete state of the game, and also contains
// methods for performing attacks by either side. (Hero or Beast). 
class GameState {
    constructor(aHero, aBeast) {
        this.hero = aHero;
        this.beast = aBeast;
    }

    // General method for executing a single attack
    doAttack(aAttacker, aDefender) {
        if (!aAttacker.isDead()) {
            aDefender.receiveDamage(aAttacker.dealDamage());
        }
    }

    // Specific method for Hero attack.
    heroAttacks() {
        this.doAttack(this.hero, this.beast);
    }
    
    // Specific method for Beast attack.
    beastAttacks() {
        this.doAttack(this.beast, this.hero);
    }
}

// This class represents a specific setup of the game w.r.t participants,
// denoted the "standard" setup.
class GameSetupStandard {
    resetGame() {
        var aHero = new Hero("Ragnar", 200, "Wizard", 1, 30, 50);
        var aBeast = new Beast("Xeros", 180, 20, 35);
        return new GameState(aHero, aBeast);
    }
}

// This class represents a specific setup of the game w.r.t participants,
// denoted the "alternate" setup.
class GameSetupAlternate {
    resetGame() {
        var aHero = new Hero("Lagertha", 300, "Warrior", 2, 40, 75);
        var aBeast = new Beast("Zarix", 350, 100, 60);
        return new GameState(aHero, aBeast);
    }
}


// Game setup
var theGameSetup = new GameSetupStandard();
var theGameState = theGameSetup.resetGame();

// Server setup
var http = require('http');
http.createServer(function (req, res) {
    // Header setup
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {'Content-Type': 'application/json'});

    // Routing
    if (req.url === "/heroAttacks")
    {
        theGameState.heroAttacks();
    }
    else if (req.url === "/beastAttacks")
    {
        theGameState.beastAttacks();
    }
    else if (req.url === "/reset")
    {
        theGameState = theGameSetup.resetGame();
    }
    else
    {
        // No action, i.e, unchanged game state is returned.
    }
    res.end(JSON.stringify(theGameState)); // Send game state back to client
}).listen(1337, '127.0.0.1');

