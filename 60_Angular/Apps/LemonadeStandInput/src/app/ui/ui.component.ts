import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  private priceOfLemon: number = 3;
  private priceOfLemonade: number = 5;

  noOfLemons: number;
  noOfCash: number;

  constructor() { 
    this.noOfLemons = 10;
    this.noOfCash = 40;
  }

  BuyLemon() {
    if (this.noOfCash >= this.priceOfLemon) {
      this.noOfLemons += 1;
      this.noOfCash -= this.priceOfLemon;
    }
  }

  SellLemonade() {
    if (this.noOfLemons >= 1) {
      this.noOfLemons -= 1;
      this.noOfCash += this.priceOfLemonade;
    }
  }

  ngOnInit() {
  }
}
