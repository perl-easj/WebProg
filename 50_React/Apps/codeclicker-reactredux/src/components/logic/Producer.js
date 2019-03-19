import {locsPerClickScaler} from "../data/GameData"

export class ProducerBase {
    constructor() {
        this.activationsAllTime = 0;
      }    
}

export class ClickProducer extends ProducerBase {
    constructor() {
        super();
      }

    locsPerActivation() {
        return Math.floor((this.activationsAllTime / locsPerClickScaler) * 
                Math.log(Math.sqrt(this.activationsAllTime) + 1)) + 1;
    }
}

export class ProducersInGame {
    constructor() {
        this.clickProducer = new ClickProducer();
      }

    clone() {
      var clonedObj = new ProducersInGame();
      clonedObj.clickProducer = this.clickProducer;
      return clonedObj;
  }
}