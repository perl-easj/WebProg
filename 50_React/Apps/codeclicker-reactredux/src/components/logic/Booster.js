import {boosterData} from "../data/BoosterData"

export class BoosterBase {
    constructor(id, boosterType, wid, price, boostFactor) {
        this.id = id;
        this.boosterType = boosterType;
        this.wid = wid;
        this.price = price;
        this.boostFactor = boostFactor;
      }
}

export class BoosterInGame extends BoosterBase {
    constructor(id, boosterType, wid, price, boostFactor, owned = false) {
        super(id, boosterType, wid, price, boostFactor)
        this.owned = owned;
      }
}

export class BoostersInGame {
    constructor(useSeedData = true) {
        this.boostersInGame = [];
        if (useSeedData) {
            boosterData.forEach((bData, index) => {
                this.boostersInGame.push(new BoosterInGame(
                    index,
                    bData.boosterType, 
                    bData.wid, 
                    bData.price, 
                    bData.factor));   
            });
        }
    }

    getBooster(id) {
        return this.boostersInGame.find(b => b.id === id);
    }

    getActiveBoosters(wid) {
        return this.boostersInGame.filter(b => b.wid === wid && b.owned === true);
    }

    getTotalBoostFactor(wid) {
        var boosters = this.getActiveBoosters(wid);
        return boosters ? boosters.map(b => b.boostFactor).reduce((total, factor) => {return total * factor}, 1) : 1;
    }
    
    clone() {
        var clonedObj = new BoostersInGame(false);
        clonedObj.boostersInGame = [];
        this.boostersInGame.forEach(elem => clonedObj.boostersInGame.push(elem));
        return clonedObj;
    }
}
