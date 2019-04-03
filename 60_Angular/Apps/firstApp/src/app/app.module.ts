import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FirstServiceService } from './first-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
