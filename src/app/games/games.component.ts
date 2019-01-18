import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { GamesService } from '../games.service';
import { DevelopersService } from '../developers.service';
import { PublishersService } from '../publishers.service';
import { GenresService } from '../genres.service';
import { Game } from '../models/game.model';
import { Developer } from '../models/developer.model';
import { Publisher } from '../models/publisher.model';
import { GameXrefGenre } from '../models/game-xref-genre.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  games: Game[] = [];
  publishers: Publisher[] = [];
  developers: Developer[];

  constructor(
    private gameService: GamesService,
    private developerService: DevelopersService,
    private publisherService: PublishersService,
    private genreService: GenresService
  ) {

    this.loadAllInfo();

  }

  ngOnInit(): void {
  }

  createGame(formGame: NgForm): void {

    if (formGame.form.status === "INVALID") return alert("fill all requied fields");

    let {
      name,
      description,
      developerId,
      publisherId,
    } = formGame.form.value;

    let newGame: Game = {
      gameId: 0,
      name: name,
      description: description,
      developerId: Number(developerId),
      publisherId: Number(publisherId),
    };

    this.gameService.addGame(newGame)
      .subscribe(_ => {
        this.loadGames();
    });

    formGame.form.reset();

  }

  deleteGame(game: Game) {

    this.gameService.deleteGame(game.gameId)
      .subscribe(_ => {
        this.loadAllInfo();
    });

  }

  loadAllInfo() {

    this.loadGames();
    this.loadDevelopers();
    this.loadPublishers();

  }

  loadGames() {

    this.gameService.getGames()
      .subscribe((data) => {
        this.games = data;
      });

  }

  loadDevelopers() {

    this.developerService.getDevelopers()
      .subscribe((data) => {
        this.developers = data;
      });

  }

  loadPublishers() {

    this.publisherService.getPublishers()
      .subscribe((data) => {
        this.publishers = data;
      });

  }

}
