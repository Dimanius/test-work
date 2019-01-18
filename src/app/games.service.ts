import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from './models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  private url: string = "http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/games";

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {

    return this.http.get<Game[]>(this.url);

  }

  getGame(id: number): Observable<Game> {

    return this.http.get<Game>(this.url + '/' + id);

  }

  addGame(game: Game): Observable<any> {

    console.log(game);
    return this.http.post(this.url, game);

  }

  deleteGame(id: Number): Observable<any> {

    return this.http.delete(this.url + '/' + id);

  }

}
