import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IDriver } from './IDriver';
import { IDriverData } from './IDriverData';


@Injectable({
  providedIn: 'root'
})
export class F1WebAPIService {

  constructor(private httpService: HttpClient) { }

  // public function to which a client component can subscribe.
  public getDrivers(): Observable<IDriver[]> {
    return this.mapData(this.getData());
  }

  // Returns the raw data from invoking the web service API
  private getData(): Observable<IDriverData> {
    return this.httpService.get<IDriverData>('http://ergast.com/api/f1/2019/drivers.json');
  }

  // Transforms the raw data to the desired format, i.e. IDriver[]
  private mapData(data: Observable<IDriverData>): Observable<IDriver[]> {
      return data.pipe(map(driverData => { return driverData.MRData.DriverTable.Drivers; }));
  }
}
