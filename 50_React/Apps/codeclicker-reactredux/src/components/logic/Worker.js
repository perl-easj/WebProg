import {baseMultiplier} from "../data/GameData";
import {workerData} from "../data/WorkerData";

export class WorkerBase {
    constructor(id, workerType, basePrice, baseLOCS) {
        this.id = id;
        this.workerType = workerType;
        this.basePrice = basePrice;
        this.baseLOCS = baseLOCS;
      }
}

export class WorkerInGame extends WorkerBase {
    constructor(id, workerType, basePrice, baseLOCS, noOwned = 0) {
        super(id, workerType, basePrice, baseLOCS)
        this.noOwned = noOwned;
      }

    getLOCS() {
        return this.baseLOCS * this.noOwned;
    }

    getBoostedBaseLOCS(boostersInGame) {
        return this.baseLOCS * boostersInGame.getTotalBoostFactor(this.id);
    }

    getBoostedLOCS(boostersInGame) {
        return this.getLOCS() * boostersInGame.getTotalBoostFactor(this.id);
    }

    getPrice() {
        return Math.round(this.basePrice * Math.pow(baseMultiplier, this.noOwned));
    }
}

export class WorkersInGame {
    constructor(useSeedData = true) {
        this.workersInGame = [];
        if (useSeedData) {
            workerData.forEach((wData, index) => {
                this.workersInGame.push(new WorkerInGame(
                    index,
                    wData.workerType, 
                    wData.price, 
                    wData.locs));   
            });
        }
    }

    getWorker(id) {
        return this.workersInGame.find(w => w.id === id);
    }

    getTotalLOCS(boostersInGame) {
        return this.workersInGame.reduce((total, elem) => {return total + elem.getBoostedLOCS(boostersInGame)}, 0);
    }
    
    clone() {
        var clonedObj = new WorkersInGame(false);
        clonedObj.workersInGame = [];
        this.workersInGame.forEach(elem => clonedObj.workersInGame.push(elem));
        return clonedObj;
    }
}
