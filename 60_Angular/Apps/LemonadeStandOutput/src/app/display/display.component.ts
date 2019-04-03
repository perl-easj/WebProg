import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  private priceOfLemon: number = 3;
  private priceOfLemonade: number = 5;
  lemons: number;
  cash: number;

  constructor() {
    this.lemons = 10;
    this.cash = 40;
  }

  BuyLemon() {
    if (this.cash >= this.priceOfLemon) {
      this.lemons += 1;
      this.cash -= this.priceOfLemon;
    }
  }

  SellLemonade() {
    if (this.lemons >= 1) {
      this.lemons -= 1;
      this.cash += this.priceOfLemonade;
    }    
  }

  ngOnInit() {
  }
}
