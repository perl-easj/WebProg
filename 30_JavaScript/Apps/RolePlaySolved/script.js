// Class definitions
// (Participants)

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
}

// Class representing a Beast participant.
class Beast extends Participant {
    constructor(name, healthPoints, goldValue, maxDamage) {
        super(name, healthPoints, maxDamage);
        this.goldValue = goldValue;
        this.description += " (Beast) ";
    }
}



// Class definitions
// (Game + UI management)

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

// This class manages the UI of the game. This version is tied to 
// a specific UI defined in index.html. Note that the dependency to
// a specific text generator is injected here.
class UIManager {
    constructor(aUITextGenerator) {
        this.uiTextGenerator = aUITextGenerator;
    }

    // Given a game state (in the parameter aGameState), this method will
    // update the game UI accordingly.
    updateUI(aGameState) {
        var statusTexts = this.uiTextGenerator.generateGameStatusText(aGameState.hero, aGameState.beast);
        this.updateStatusText('#statusGame', statusTexts.gameStatusText);
        this.updateStatusText('#statusHero', statusTexts.heroStatusText);
        this.updateStatusText('#statusBeast', statusTexts.beastStatusText);
    }
     
    // Sets up the event handlers for the three buttons in the game UI.
    setupEventHandlers(aGameState, aGameResetter) {
        this.setupButtonOnClickHandler('#buttonHero', () => 
        { 
            aGameState.heroAttacks(); 
            this.updateUI(aGameState);
    
        });
        this.setupButtonOnClickHandler('#buttonBeast', () => 
        { 
            aGameState.beastAttacks();
            this.updateUI(aGameState); 
        });
        this.setupButtonOnClickHandler('#buttonReset', () => 
        { 
            aGameState = aGameResetter();
            this.updateUI(aGameState);  
        });
    }

    // Helper method for updating a specific text element.
    updateStatusText(selector, text) {
        var elem = document.querySelector(selector);
        elem.innerHTML = text;
    }

    // Helper method for setting up a specific onClick event handler.
    setupButtonOnClickHandler(selector, handler) {
        var button = document.querySelector(selector);
        button.onclick = handler;
    }
}

// This class contains methods for generating status text strings for the game UI.
// This version contain English strings.
class UITextGeneratorEnglish {

    generateGameStatusText(aHero, aBeast) {
        var statusTexts = {};
        statusTexts.heroStatusText = "The Hero " + this.generateParticipantStatusText(aHero);
        statusTexts.beastStatusText = "The Beast " + this.generateParticipantStatusText(aBeast);
        statusTexts.gameStatusText = "The Game";
    
        if (!aHero.isDead() && !aBeast.isDead())
        {
            statusTexts.gameStatusText += " is ongoing...";
        }
        else
        {
            statusTexts.gameStatusText += " has ended...";
        }
        
        return statusTexts;
    }
    
    generateParticipantStatusText(aParticipant) {
        var statusText = "(" + aParticipant.name + ") is ";
    
        if (!aParticipant.isDead())
        {
            statusText += " alive, and has " + aParticipant.healthPoints.toFixed(2) + " HP left."
        }
        else
        {
            statusText += " dead..."
        }
    
        return statusText;
    }    
}



// Class definitions
// (Game setups)

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

// This class launches the game, given a specific game setup and
// a specific UI text generator.
class GameLauncher {
    static launch(aGameSetup, aUITextGenerator) {
        var theUIManager = new UIManager(aUITextGenerator);
        var theGameState = aGameSetup.resetGame();
        theUIManager.setupEventHandlers(theGameState, aGameSetup.resetGame);
        theUIManager.updateUI(theGameState);
    }
}



// App setup
//

// This method defines a specific setup for a game, by choosing a specific
// game setup and a specific text generator
window.onload = function() {
    GameLauncher.launch(
        new GameSetupStandard(), 
        new UITextGeneratorEnglish());
}
