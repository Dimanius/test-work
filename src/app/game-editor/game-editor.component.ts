import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GamesService } from '../games.service';
import { DevelopersService } from '../developers.service';
import { PublishersService } from '../publishers.service';
import { GenresService } from '../genres.service';
import { Game } from '../models/game.model';
import { Developer } from '../models/developer.model';
import { Publisher } from '../models/publisher.model';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-game-editor',
  templateUrl: './game-editor.component.html',
  styleUrls: ['./game-editor.component.scss']
})
export class GameEditorComponent implements OnInit {

  game: Game = {
    gameId: 0,
    name: '',
    description: '',
    developerId: 0,
    publisherId: 0,
  };

  publishers: Publisher[];
  developers: Developer[];
  genres: Genre[];

  constructor(
    private gameService: GamesService,
    private developerService: DevelopersService,
    private publisherService: PublishersService,
    private genreService: GenresService,
    private route: ActivatedRoute,
  ) {

    this.loadAllInfo();

  }

  ngOnInit() {
  }

  updateGame(formGame: NgForm): void {

    if (formGame.form.status === "INVALID") return alert("fill all requied fields");

    let {
      name,
      description,
      developerId,
      publisherId,
    } = formGame.form.value;

    let game: Game = {
      gameId: this.game.gameId,
      name: name,
      description: description,
      developerId: Number(developerId),
      publisherId: Number(publisherId),
    };

    this.gameService.updateGame(game)
      .subscribe(_ => {
        this.loadAllInfo();
    });

  }

  deleteGame(game: Game) {

    this.gameService.deleteGame(game.gameId)
      .subscribe(_ => {
        this.loadAllInfo();
    });

  }

  loadAllInfo() {

    this.loadDevelopers();
    this.loadPublishers();
    this.loadGenres();
    this.loadGame();

  }

  loadGame() {

    this.gameService.getGame(this.route.params['value'].id)
      .subscribe((data) => {
        this.game = data;
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

  loadGenres() {

    this.genreService.getGenres()
      .subscribe((data) => {
        this.genres = data;
      });

  }

}
