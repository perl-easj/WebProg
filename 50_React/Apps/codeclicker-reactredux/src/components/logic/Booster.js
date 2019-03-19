import {boosterData} from "../data/BoosterData"

export class BoosterBase {
    constructor(boosterType, workerType, boosterNo, price, boostFactor) {
        this.boosterType = boosterType;
        this.workerType = workerType;
        this.boosterNo = boosterNo;
        this.price = price;
        this.boostFactor = boostFactor;
      }
}

export class BoosterInGame extends BoosterBase {
    constructor(boosterType, workerType, boosterNo, price, boostFactor, owned = false) {
        super(boosterType, workerType, boosterNo, price, boostFactor)
        this.owned = owned;
      }
}

export class BoostersInGame {
    constructor() {
        this.boostersInGame = [];
        boosterData.forEach(bData => {
            this.boostersInGame.push(new BoosterInGame(
                bData.boosterType, 
                bData.workerType, 
                bData.lid, 
                bData.price, 
                bData.factor));   
        });
    }

    getBoosters(workerType) {
        return this.boostersInGame.filter(b => b.workerType === workerType);
    }

    getActiveBoosters(workerType) {
        return this.boostersInGame.filter(b => b.workerType === workerType && b.owned === true);
    }

    getBooster(boosterType) {
        return this.boostersInGame.find(b => b.boosterType === boosterType);
    }

    getBoosterFromWorker(workerType, boosterNo) {
        return this.boostersInGame.find(b => b.workerType === workerType && b.boosterNo === boosterNo);
    }

    isOwned(boosterType) {
        var booster = this.getBooster(boosterType);
        return booster ? booster.owned : false;
    }

    getPrice(boosterType) {
        var booster = this.getBooster(boosterType);
        return booster ? booster.price : -1;
    }

    getBoostFactor(boosterType) {
        var booster = this.getBooster(boosterType);
        return booster ? booster.boostFactor : 1;
    }

    getTotalBoostFactor(workerType) {
        var boosters = this.getActiveBoosters(workerType);
        return boosters ? boosters.map(b => b.boostFactor).reduce((total, factor) => {return total * factor}, 1) : 1;
    }

    addCodeBooster(boosterType) {
        var booster = this.getBooster(boosterType);
        if (booster) { 
            booster.owned += true; 
        }
    }
    
    clone() {
        var clonedObj = new BoostersInGame();
        clonedObj.boostersInGame = [];
        this.boostersInGame.forEach(elem => clonedObj.boostersInGame.push(new BoosterInGame(elem.boosterType, elem.workerType, elem.boosterNo, elem.price, elem.boostFactor, elem.owned)));
        return clonedObj;
    }
}
