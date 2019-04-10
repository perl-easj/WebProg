import { IDriver } from './IDriver';

// The interface IDriverData matches the format for data returned by invoking the Web API.
// What we ultimately want is a IDriver[], i.e. an array of objects conforming to the IDriver interface.
// The interface thus defines to how "map" from the raw web service data (of typer IDriverData)
// to the desired array.
export interface IDriverData {MRData: {DriverTable: {Drivers: IDriver[]; }; }; }