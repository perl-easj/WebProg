import { Component, OnInit } from '@angular/core';
import { F1WebAPIService } from '../f1-web-api.service';
import { IDriver } from '../IDriver';

@Component({
  selector: 'app-simple-http-service',
  templateUrl: './simple-http-service.component.html',
  styleUrls: ['./simple-http-service.component.css'],
  providers: [F1WebAPIService]
})
export class SimpleHttpServiceComponent implements OnInit {

  private drivers: IDriver[];

  constructor(private service: F1WebAPIService) { }

  ngOnInit() {
    this.service.getDrivers().subscribe(response => this.drivers = response);
  }   
}
