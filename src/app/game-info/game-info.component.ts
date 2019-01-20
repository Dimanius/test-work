import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GamesService } from '../games.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  game: Game = {
    gameId: 0,
    name: '',
    description: '',
    developerId: 0,
    developer: [],
    publisher: [],
  };

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.gameService.getGame(this.route.params['value'].id)
      .subscribe((data) => {
        this.game = data;
      });

  }

}
