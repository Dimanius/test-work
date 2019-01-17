import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Genre } from './models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private url: string = 'http://pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/genres';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<Genre[]> {

    return this.http.get<Genre[]>(this.url);

  }

  addGenre(genre: Genre): Observable<any> {

    return this.http.post(this.url, genre);

  }

  updateGenre(genre: Genre): Observable<any> {

    return this.http.put(this.url + '/' + genre.genreId, genre);

  }
}
