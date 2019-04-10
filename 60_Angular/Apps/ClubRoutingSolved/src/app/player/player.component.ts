import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../shared/Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private player: Player;

  constructor(private playerService: PlayerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.player = this.playerService.getPlayer(+this.route.snapshot.paramMap.get('no'));
  }

  public goBack() {
    this.router.navigate(['/roster']);
  }
}
