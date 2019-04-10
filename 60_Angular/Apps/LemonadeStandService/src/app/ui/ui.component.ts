import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  BuyLemonEnabled: boolean;
  SellLemonadeEnabled: boolean;

  constructor(private invService: InventoryService) { 
    this.BuyLemonEnabled = false;
    this.SellLemonadeEnabled = true;
  }

  BuyLemonHandler() {
    this.invService.BuyLemon();
    this.UpdateButtonStates();
  }

  SellLemonadeHandler() {
    this.invService.SellLemonade();
    this.UpdateButtonStates();
  }

  UpdateButtonStates() {
    this.BuyLemonEnabled = this.invService.noOfCash >= this.invService.priceOfLemon;
    this.SellLemonadeEnabled = this.invService.noOfLemons >= 1;
  }

  ngOnInit() {
    this.UpdateButtonStates();
  }
}
