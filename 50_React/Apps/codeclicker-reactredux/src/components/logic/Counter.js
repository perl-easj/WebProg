import { initialLOCS } from "../data/GameData";

export class CountersInGame {
    constructor() {
        this.locsInBank = initialLOCS;
        this.locsAllTime = initialLOCS;
      }

      clone() {
        var clonedObj = new CountersInGame();
        clonedObj.locsInBank = this.locsInBank;
        clonedObj.locsAllTime = this.locsAllTime;
        return clonedObj;
    }
}