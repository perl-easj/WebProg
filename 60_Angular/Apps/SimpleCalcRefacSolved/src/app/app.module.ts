import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculationService } from './calculation.service';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
