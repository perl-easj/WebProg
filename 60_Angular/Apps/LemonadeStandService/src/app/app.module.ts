import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { DisplayComponent } from './display/display.component';
import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
