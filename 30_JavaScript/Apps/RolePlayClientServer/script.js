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

// This class manages the UI of the game. This version is tied to 
// a specific UI defined in index.html. Note that the dependency to
// a specific text generator is injected here.
class ClientUIManager {
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
    setupEventHandlers(aGameServerConnection) {
        this.setupButtonOnClickHandler('#buttonHero', () => 
        { 
            aGameServerConnection.heroAttacks(this); 
        });
        this.setupButtonOnClickHandler('#buttonBeast', () => 
        { 
            aGameServerConnection.beastAttacks(this);
        });
        this.setupButtonOnClickHandler('#buttonReset', () => 
        { 
            aGameServerConnection.reset(this);
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
        if (!aHero.isDead() && !aBeast.isDead()) {
            statusTexts.gameStatusText += " is ongoing...";
        }
        else {
            statusTexts.gameStatusText += " has ended...";
        }
        return statusTexts;
    }
    generateParticipantStatusText(aParticipant) {
        console.log(aParticipant);
        var statusText = "(" + aParticipant.name + ") is ";
        if (!aParticipant.isDead()) {
            statusText += " alive, and has " + aParticipant.healthPoints.toFixed(2) + " HP left.";
        }
        else {
            statusText += " dead...";
        }
        return statusText;
    }
}

class GameServerConnection {
    constructor(serverURL) {
        this.serverURL = serverURL;
    }

    heroAttacks(aUIManager) { this.executeCmd("/heroAttacks", aUIManager); }
    beastAttacks(aUIManager) { this.executeCmd("/beastAttacks", aUIManager); }
    reset(aUIManager) { this.executeCmd("/reset", aUIManager); }
    current(aUIManager) { this.executeCmd("/current", aUIManager); }

    async executeCmd(url, aUIManager) {
        var fullURL = this.serverURL + url;
        var resp = await fetch(fullURL);
        var gameState = await resp.json();
        aUIManager.updateUI(new GameState(Hero.build(gameState.hero), Beast.build(gameState.beast)));
    }
}

// This class launches the game client, given a specific UI text generator.
class GameClientLauncher {
    static launch(aUITextGenerator) {
        var theGameServerConnection = new GameServerConnection('http://127.0.0.1:1337');
        var theClientUIManager = new ClientUIManager(aUITextGenerator);
        theClientUIManager.setupEventHandlers(theGameServerConnection);
        theGameServerConnection.current(theClientUIManager);
    }
}


// Client setup
//
window.onload = function() {
    GameClientLauncher.launch(new UITextGeneratorEnglish());
}


