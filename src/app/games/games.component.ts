import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../games.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GamesService) {
  }

  ngOnInit(): void {

    this.gameService.getGames()
      .subscribe((data) => {
        this.games = data;
      });

  }

}
