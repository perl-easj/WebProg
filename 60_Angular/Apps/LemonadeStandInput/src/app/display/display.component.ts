import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() lemons: number;
  @Input() cash: number;

  constructor() {
    this.lemons = 0;
    this.cash = 0; 
  }

  ngOnInit() {
  }

}
