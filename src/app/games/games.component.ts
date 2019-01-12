import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  games: any = [];

  constructor(private gameService: GamesService) {
  }

  ngOnInit() {

    this.gameService.getGames()
      .subscribe((data) => {
        this.games = data;
      });

  }

}
