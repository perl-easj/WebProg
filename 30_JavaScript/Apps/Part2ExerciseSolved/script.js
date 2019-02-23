// Class definitions
// (Participants)

class Participant {
    constructor(name, healthPoints, maxDamage) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.maxDamage = maxDamage;
        this.description = name;
    }

    dealDamage() {
        var damage = Math.random() * this.maxDamage;
        return damage;
    }

    receiveDamage(damagePoints) {
        this.healthPoints -= damagePoints;
    }

    isDead() {
        return this.healthPoints <= 0; 
    }
}

class Hero extends Participant {
    constructor(name, healthPoints, role, level, goldFunds, maxDamage) {
        super(name, healthPoints, maxDamage);
        this.role = role;
        this.level = level;
        this.goldFunds = goldFunds;
        this.description += " (Hero) ";
    }
}

class Beast extends Participant {
    constructor(name, healthPoints, goldValue, maxDamage) {
        super(name, healthPoints, maxDamage);
        this.goldValue = goldValue;
        this.description += " (Beast) ";
    }
}

function deathMatch(aHero, aBeast) {
    while (!aHero.isDead() && !aBeast.isDead())
    {
        aBeast.receiveDamage(aHero.dealDamage());
        if (!aBeast.isDead())
        {
            aHero.receiveDamage(aBeast.dealDamage());
        }
    }

    if (aHero.isDead())
    {
        console.log("Beast won, with " + aBeast.healthPoints.toFixed(2) + " HP left.");
    }
    else
    {
        console.log("Hero won, with " + aHero.healthPoints.toFixed(2) + " HP left.");
    }
}

var theHero = new Hero("Ragnar", 200, "Wizard", 1, 30, 50);
var theBeast = new Beast("Zaerix", 180, 35, 40);
deathMatch(theHero, theBeast);


