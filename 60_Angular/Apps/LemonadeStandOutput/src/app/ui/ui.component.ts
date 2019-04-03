import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  @Output() buyLemonEvent: EventEmitter<Number>;
  @Output() sellLemonadeEvent: EventEmitter<Number>;

  constructor() { 
    this.buyLemonEvent = new EventEmitter<Number>();
    this.sellLemonadeEvent = new EventEmitter<Number>();
  }

  BuyLemonHandler() {
    this.buyLemonEvent.emit(1);
  }

  SellLemonadeHandler() {
    this.sellLemonadeEvent.emit(1);
  }

  ngOnInit() {
  }
}
