import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor(private invService: InventoryService) { 
  }

  BuyLemonHandler() {
    this.invService.BuyLemon();
  }

  SellLemonadeHandler() {
    this.invService.SellLemonade();
  }

  ngOnInit() {
  }
}
