import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  Add(x: number, y: number) { return x + y; }
  Sub(x: number, y: number) { return x - y; }
  Mul(x: number, y: number) { return x * y; }
  Div(x: number, y: number) { return x / y; }
}
