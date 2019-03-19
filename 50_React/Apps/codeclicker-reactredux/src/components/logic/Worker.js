import {baseMultiplier} from "../data/GameData";
import {workerData} from "../data/WorkerData";

export class WorkerBase {
    constructor(workerType, workerId, basePrice, baseLOCS) {
        this.workerType = workerType;
        this.workerId = workerId;
        this.basePrice = basePrice;
        this.baseLOCS = baseLOCS;
      }
}

export class WorkerInGame extends WorkerBase {
    constructor(workerType, workerId, basePrice, baseLOCS, noOwned = 0) {
        super(workerType, workerId, basePrice, baseLOCS)
        this.noOwned = noOwned;
      }

    getLOCS() {
        return this.baseLOCS * this.noOwned;
    }

    getBoostedBaseLOCS(boostersInGame) {
        return this.baseLOCS * boostersInGame.getTotalBoostFactor(this.workerType);
    }

    getBoostedLOCS(boostersInGame) {
        return this.getLOCS() * boostersInGame.getTotalBoostFactor(this.workerType);
    }

    getPrice() {
        return Math.round(this.basePrice * Math.pow(baseMultiplier, this.noOwned));
    }
}

export class WorkersInGame {
    constructor() {
        this.workersInGame = [];

        this.workersInGame = [];
        workerData.forEach(wData => {
            this.workersInGame.push(new WorkerInGame(
                wData.workerType, 
                wData.wid, 
                wData.price, 
                wData.locs));   
        });
    }

    getWorker(workerType) {
        return this.workersInGame.find(w => w.workerType === workerType);
    }

    getNoOwned(workerType) {
        var worker = this.getWorker(workerType);
        return worker ? worker.noOwned : -1;
    }

    getPrice(workerType) {
        var worker = this.getWorker(workerType);
        return worker ? worker.getPrice() : -1;
    }

    getBaseLOCS(workerType) {
        var worker = this.getWorker(workerType);
        return worker ? worker.baseLOCS : -1;
    }

    getLOCS(workerType) {
        var worker = this.getWorker(workerType);
        return worker ? worker.getLOCS() : -1;
    }

    getBoostedBaseLOCS(workerType, boostersInGame) {
        var worker = this.getWorker(workerType);
        return worker ? worker.getBoostedBaseLOCS(boostersInGame) : -1;
    }

    getBoostedLOCS(workerType, boostersInGame) {
        var worker = this.getWorker(workerType);
        return worker ? worker.getBoostedLOCS(boostersInGame) : -1;
    }

    addCodeWorkers(workerType, noToAdd) {
        var worker = this.getWorker(workerType);
        if (worker) { 
            worker.noOwned += noToAdd; 
        }
    }

    getTotalLOCS(boostersInGame) {
        return this.workersInGame.reduce((total, elem) => {return total + elem.getBoostedLOCS(boostersInGame)}, 0);
    }
    
    clone() {
        var clonedObj = new WorkersInGame();
        clonedObj.workersInGame = [];
        this.workersInGame.forEach(elem => clonedObj.workersInGame.push(new WorkerInGame(elem.workerType, elem.workerId, elem.basePrice, elem.baseLOCS, elem.noOwned)));
        return clonedObj;
    }
}
