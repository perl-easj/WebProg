import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  lemons: number;
  cash: number;

  constructor(private invService: InventoryService) {
    this.lemons = invService.noOfLemons;
    this.cash = invService.noOfCash; 
  }

  ngOnInit() {
    this.invService.stateChanged.subscribe( ({ lemons, cash }) => {
      this.lemons = lemons;
      this.cash = cash; 
    });
  }
}
