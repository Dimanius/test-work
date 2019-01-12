import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  game: any = {};

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    console.log(this.route.params['value'].id);
    this.gameService.getGame(this.route.params['value'].id)
      .subscribe((data) => {
        this.game = data;
        console.log(this.game);
      });

  }

}
