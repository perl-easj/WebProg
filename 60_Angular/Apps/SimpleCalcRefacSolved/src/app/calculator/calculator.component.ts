import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  x: number;
  y: number;
  res: number;

  constructor(private calcService: CalculationService) { 
    this.x = 0;
    this.y = 0;
    this.res = 0;
  }

  Add(){ this.res = this.calcService.Add(this.x, this.y); }
  Sub(){ this.res = this.calcService.Sub(this.x, this.y); }
  Mul(){ this.res = this.calcService.Mul(this.x, this.y); }
  Div(){ this.res = this.calcService.Div(this.x, this.y); }

  ngOnInit() {
  }
}
