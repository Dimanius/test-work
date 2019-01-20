import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GameXrefGenre } from './models/game-xref-genre.model';

@Injectable({
  providedIn: 'root'
})
export class GameXrefGenresService {

  private url: string = 'http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/GameXrefGenres';

  constructor(private http: HttpClient) { }

  addGenreForGame(gameXrefGenre: GameXrefGenre): Observable<any> {

    return this.http.post(this.url, gameXrefGenre);

  }

  deleteGenreFromGame(idGame: number, idGenre: number): Observable<any> {

    return this.http.delete(`${this.url}/${idGame}?genre_id=${idGenre}`);

  }

}
