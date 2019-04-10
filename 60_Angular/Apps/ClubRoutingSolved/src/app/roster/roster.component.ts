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

  public onSelect(player: Player) {
    this.router.navigate(['/player', player.no]);
  }
}
