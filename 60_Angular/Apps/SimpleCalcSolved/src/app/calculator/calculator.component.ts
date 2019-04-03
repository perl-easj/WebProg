import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  x: number;
  y: number;
  res: number;

  constructor() { 
    this.x = 0;
    this.y = 0;
    this.res = 0;
  }

  Add(){ this.res = this.x + this.y; }
  Sub(){ this.res = this.x - this.y; }
  Mul(){ this.res = this.x * this.y; }
  Div(){ this.res = this.x / this.y; }

  ngOnInit() {
  }
}
