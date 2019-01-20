import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GamesService } from '../games.service';
import { DevelopersService } from '../developers.service';
import { PublishersService } from '../publishers.service';
import { GenresService } from '../genres.service';
import { GameXrefGenresService } from '../game-xref-genres.service';
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
    gameXrefGenre: []
  };

  gameForm: FormGroup;
  publishers: Publisher[] = [];
  genres: Genre[] = [];
  developers: Developer[];

  constructor(
    private gameService: GamesService,
    private developerService: DevelopersService,
    private publisherService: PublishersService,
    private genreService: GenresService,
    private gameXrefGenreService: GameXrefGenresService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.gameForm = this.fb.group({
      name: [''],
      description: [''],
      developerId: [''],
      publisherId: [''],
      genres: this.fb.array([])
    });

    zip(this.loadGame(), this.loadDevelopers(), this.loadPublishers(), this.loadGenres())
      .subscribe(([game, developers, publishers, genres]) => {

        this.game = game;
        this.developers = developers;
        this.publishers = publishers;
        this.genres = genres;

        this.initForm()

      });

  }

  updateGame(): void {

    if (this.gameForm.invalid) { return alert('fill all requied fields')};

    let {
      name,
      description,
      developerId,
      publisherId,
      genres,
    } = this.gameForm.value;

    let game: Game = {
      gameId: this.game.gameId,
      name: name,
      description: description,
      developerId: Number(developerId),
      publisherId: Number(publisherId),
    };

    if (!game.publisherId) { delete(game.publisherId); }

    this.gameService.updateGame(game)
    .pipe(switchMap(_ => this.updateGanresForGame()))
    .pipe(switchMap(_ => this.loadGame()))
    .subscribe(data => {
      this.game = data;
    });


  }

  initForm(): void {

    this.gameForm.patchValue(this.game);

    let checkedGenres = this.game.gameXrefGenre.map((genre) => genre.genreId);

    let genresControl = this.fb.array([]);

    this.genres.forEach((genre) => {

      let isChecked = checkedGenres.includes(genre.genreId);
      genresControl.push(this.fb.control(isChecked));

    });

    this.gameForm.setControl('genres', genresControl);

  }

  loadGame(): Observable<Game> {

    return this.gameService.getGame(this.route.params['value'].id);

  }

  loadDevelopers(): Observable<Developer[]> {

    return this.developerService.getDevelopers();

  }

  loadPublishers(): Observable<Publisher[]> {

    return this.publisherService.getPublishers();

  }

  loadGenres(): Observable<Genre[]> {

    return this.genreService.getGenres();

  }

  updateGanresForGame() {

    let idGame = this.game.gameId;
    let diffArrayGenres = this.differceArrayGenres();

    let observables = diffArrayGenres.map(item => {

      if (item.action === 1) {

        return this.gameXrefGenreService.addGenreForGame({
          gameId: idGame,
          genreId: item.genre.genreId
        });

      } else {

        return this.gameXrefGenreService.deleteGenreFromGame(idGame, item.genre.genreId);

      }

    });

    return zip(...observables);

  }

  private differceArrayGenres() {

    let gameGenres = this.game.gameXrefGenre.map(genre => genre.genreId);
    let genresForm = this.gameForm.value.genres;

    let result = [];

    this.genres.forEach((genre, i) => {

      if (genresForm[i] && !gameGenres.includes(genre.genreId)) {

        result.push({ action: 1, genre });

      } else if (!genresForm[i] && gameGenres.includes(genre.genreId)) {

        result.push({ action: -1, genre });

      }

    });

    return result;

  }

}
