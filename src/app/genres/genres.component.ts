import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GenresService } from '../genres.service';
import { Genre } from '../models/genre.model';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Genre[];

  constructor( private genreService: GenresService) { }

  ngOnInit(): void {

    this.loadGenres();

  }

  addGenre(name: string):void {

    let newGenre = {
      genreId: 0,
      name: name,
    } as Genre;

    this.genreService.addGenre(newGenre).subscribe(_ => {
      this.loadGenres();
    });

  }

  updateGenre(genre: Genre) {

    this.genreService.updateGenre(genre).subscribe(_ => {
      this.loadGenres();
    })

  }

  loadGenres() {

    this.genreService.getGenres()
    .subscribe((data) => {
      this.genres = data;
    });

  }

}
