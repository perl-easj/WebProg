import { Injectable } from '@angular/core';
import { Player } from './shared/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public getPlayers(): Player[] {
    return [
      { no: 18, name:  "Ben Blocker     ", position: "G"},
      { no: 21, name:  "Dave Defender   ", position: "D"},
      { no: 33, name:  "Sam Sweeper     ", position: "D"},
      { no: 40, name:  "Matt Midfielder ", position: "M"},
      { no: 51, name:  "William Winger  ", position: "M"},
      { no: 68, name:  "Fillipe Forward ", position: "F"},
    ];
  }

  public getPlayer(no: number): Player {
    return this.getPlayers().find(p => p.no === no);
  }

  constructor() { }
}
