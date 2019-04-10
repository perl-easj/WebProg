import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../shared/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  private players: Player[];

  constructor(private playerService: PlayerService,
              private router: Router) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  // Implement a handler for clicking on a player; it should navigate to 
  // a URL which is specific for that player.
}
