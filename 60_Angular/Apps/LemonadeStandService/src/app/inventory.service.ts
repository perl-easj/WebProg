import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private priceOfLemon: number = 3;
  private priceOfLemonade: number = 5;

  noOfLemons: number;
  noOfCash: number;
  stateChanged: EventEmitter<any>;

  constructor() { 
    this.noOfLemons = 10;
    this.noOfCash = 40;
    this.stateChanged = new EventEmitter();
  }

  BuyLemon() {
    if (this.noOfCash >= this.priceOfLemon) {
      this.noOfLemons += 1;
      this.noOfCash -= this.priceOfLemon;
      this.EmitStateChangeEvent();
    }
  }

  SellLemonade() {
    if (this.noOfLemons >= 1) {
      this.noOfLemons -= 1;
      this.noOfCash += this.priceOfLemonade;
      this.EmitStateChangeEvent();
    }
  }
  
  private EmitStateChangeEvent() {
    this.stateChanged.emit({ lemons: this.noOfLemons, cash: this.noOfCash });
  }
}
