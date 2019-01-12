import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

  private _url: string = "http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/games";
  public games: any;

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {

    return this.http.get(this._url);

  }

  getGame(id: number): Observable<any> {

    return this.http.get(this._url + '/' + id);

  }

}
